# Database Design

## Databases

| Database | Purpose |
|---|---|
| Workout Menu | トレーニング・ストレッチのメニューを管理する |
| Daily Record | 日ごとの実施内容や睡眠時間を記録する |

## Workout Menu

### Purpose

ダッシュボードに表示するトレーニング・ストレッチメニューを管理する。

### Properties

| Property | Type | Required | Description |
|---|---|---:|---|
| Name | Title | Yes | メニュー名 |
| Category | Select | Yes | Workout / Stretch |
| Sets | Number | No | セット数 |
| Reps | Number | No | 回数 |
| Is Active | Checkbox | Yes | 現在使用するメニューか |
| Display Order | Number | No | 表示順 |
| Memo | Text | No | 補足 |

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
| Sleep Duration | Number | No | 睡眠時間（分） |
| Meal Breakfast | Text | No | 食事内容 |
| Meal Lunch | Text | No | 食事内容 |
| Meal Dinner | Text | No | 食事内容 |
| Memo | Text | No | その日のメモ |

### Record Rules

- 1日につき1レコードを作成する
- Date は重複させない
- 同日の再入力時は、新規作成ではなく既存レコードを更新する

## Screen Mapping

| Screen | Read | Write |
|---|---|---|
| Dashboard | Workout Menu / Daily Record | Daily Record |
| Training Menu | Workout Menu | Workout Menu |
| Record | Daily Record | なし |