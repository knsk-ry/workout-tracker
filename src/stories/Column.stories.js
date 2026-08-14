const meta = {
  title: "Components/Column",
};

export default meta;

export const ColumnMax2 = {
  render: () => `
    <div class="ColumnLayout --MaxCol2">
      <div>
        <p class="Text">カラムレイアウトの1カラム目</p>
      </div>
      <div>
        <p class="Text">カラムレイアウトの2カラム目</p>
      </div>
      <div>
        <p class="Text">カラムレイアウトの3カラム目</p>
      </div>
    </div>
  `,
};

export const ColumnMax3 = {
  render: () => `
    <div class="ColumnLayout --MaxCol3">
      <div>
        <p class="Text">カラムレイアウトの1カラム目</p>
      </div>
      <div>
        <p class="Text">カラムレイアウトの2カラム目</p>
      </div>
      <div>
        <p class="Text">カラムレイアウトの3カラム目</p>
      </div>
      <div>
        <p class="Text">カラムレイアウトの4カラム目</p>
      </div>
    </div>
  `,
};

export const ColumnMax4 = {
  render: () => `
    <div class="ColumnLayout --MaxCol4">
      <div>
        <p class="Text">カラムレイアウトの1カラム目</p>
      </div>
      <div>
        <p class="Text">カラムレイアウトの2カラム目</p>
      </div>
      <div>
        <p class="Text">カラムレイアウトの3カラム目</p>
      </div>
      <div>
        <p class="Text">カラムレイアウトの4カラム目</p>
      </div>
      <div>
        <p class="Text">カラムレイアウトの5カラム目</p>
      </div>
    </div>
  `,
};

export const Flexible = {
  render: () => `
    <div class="ColumnLayout --Flexible">
      <div>
        <p class="Text">テキストテキスト</p>
      </div>
      <div>
        <p class="Text">テキスト</p>
      </div>
      <div>
        <p class="Text">テキストテキストテキストテキスト</p>
      </div>
      <div>
        <p class="Text">テキストテキストテキスト</p>
      </div>
      <div>
        <p class="Text">テキスト</p>
      </div>
    </div>
  `,
};