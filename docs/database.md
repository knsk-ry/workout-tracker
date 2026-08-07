# Database Design

## Databases

| Database | Purpose |
|---|---|
| Workout Menu | トレーニング・ストレッチのメニューを管理する |
| Daily Record | 日ごとの実施内容や睡眠時間を記録する |

## Workout Menu

### Purpose

ダッシュボードに表示するトレーニング・ストレッチメニューを管理する。

## Architecture

GitHub Pages上のフロントエンドからサーバーレスAPIを呼び出す。
Notion APIの認証情報はサーバーレスAPIの環境変数として管理し、
ブラウザには公開しない。

### Properties

| Property | Type | Required | Description |
|---|---|---:|---|
| Name | Title | Yes | メニュー名 |
| Category | Select | Yes | Workout / Stretch |
| Sets | Number | No | セット数 |
| Reps | Number | No | 回数 |
| Scheduled Days | Multi-select | No | 実施予定の曜日（Mon / Tue / Wed / Thu / Fri / Sat / Sun） |Sat |
| Is Active | Checkbox | Yes | 現在使用するメニューか |
| Display Order | Number | No | 表示順 |
| Memo | Text | No | 補足 |

### Schedule Rules

- Scheduled Daysには複数の曜日を指定できる
- ダッシュボードには、現在の曜日がScheduled Daysに含まれるメニューを表示する
- Is Activeがオフのメニューは表示しない
- Scheduled Daysが未設定のメニューは、ダッシュボードには表示せず、メニュー一覧でのみ管理する
- メニューはDisplay Orderの昇順で表示する

## Daily Record

### Purpose

日ごとのトレーニング、ストレッチ、睡眠時間などを記録する。

### Properties

| Property | Type | Required | Description |
|---|---|---:|---|
| Date | Date | Yes | 記録日 |
| Completed Menu | Relation | No | 実施したメニュー |
| Sleep Start | Date | No | 入眠時刻 |
| Sleep End | Date | No | 起床時刻 |
| Meal Breakfast | Text | No | 食事内容 |
| Meal Lunch | Text | No | 食事内容 |
| Meal Dinner | Text | No | 食事内容 |
| Memo | Text | No | その日のメモ |

### Record Rules

- Daily Recordはローカルタイムゾーン上の1日につき1レコードとする
- Dateには日付のみを保存し、時刻は含めない
- 保存前にDateが一致するレコードを検索する
- 一致するレコードが0件の場合は、新しいレコードを作成する
- 一致するレコードが1件の場合は、そのレコードを更新する
- 一致するレコードが複数件の場合は更新を行わず、重複エラーとしてログに記録する
- 重複エラーが発生した場合は、利用者に保存できなかったことを表示する

### Date and Time Rules

- アプリで扱うタイムゾーンはAsia/Tokyoとする
- Daily RecordのDateはAsia/Tokyoにおける日付を使用する
- Sleep StartとSleep Endは日時として保存する
- 睡眠時間はSleep StartとSleep Endから算出し、重複保存しない
- 日付をまたぐ睡眠を許可する
- Sleep EndはSleep Startより後の日時でなければならない

## Screen Mapping

| Screen | Read | Write |
|---|---|---|
| Dashboard | Workout Menu / Daily Record | Daily Record |
| Training Menu | Workout Menu | Workout Menu |
| Record | Daily Record | なし |

## System Architecture

GitHub Pages上のフロントエンドとNotion APIの間に、サーバーレスAPIを配置する。

```text
Browser
  ↓ HTTPS
Serverless API
  ↓ Notion API
Notion Database
```

### Security Rules

- Notion APIトークンをフロントエンドへ含めない
- NotionのDatabase IDをクライアントから自由に指定させない
- APIで受け付けるプロパティを許可リスト方式で制限する
- リクエストボディの型、文字数、日付形式を検証する
- 許可したOrigin以外からのブラウザアクセスを拒否する
- 書き込みAPIには利用者認証を必須とする
- エラーレスポンスにNotion APIの詳細や認証情報を含めない
- APIには必要に応じてレート制限を設ける