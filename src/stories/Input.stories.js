const meta = {
  title: "Components/Form/Input",
};

export default meta;

export const Default = {
  render: () => `
    <div class="Input">
      <label for="input" class="Input__label">テキスト入力</label>
      <input type="text" id="input" name="{Dummy}" class="Input__text" placeholder="テキスト入力">
    </div>
  `,
};

export const LabelNone = {
  render: () => `
    <div class="Input">
      <input type="text" id="notLabel" name="{Dummy}" class="Input__text" placeholder="テキスト入力">
    </div>
  `,
};