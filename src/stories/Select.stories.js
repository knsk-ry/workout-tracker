const meta = {
  title: "Components/Form/Select",
};

export default meta;

export const Default = {
  render: () => `
    <div class="Select">
      <label for="category" class="Select__label">カテゴリー</label>
      <select id="category" name="{Dummy}" class="Select__input">
        <option>選択肢1</option>
        <option>選択肢2</option>
        <option>選択肢3</option>
      </select>
    </div>
  `,
};
