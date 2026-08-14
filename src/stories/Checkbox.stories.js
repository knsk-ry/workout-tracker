const meta = {
  title: "Components/Form/Checkbox",
};

export default meta;

export const Default = {
  render: () => `
    <div class="Checkbox">
      <label for="checkbox" class="Checkbox__label">チェックボックス</label>
      <input type="checkbox" id="checkbox" name="{Dummy}" class="Checkbox__input">
    </div>
  `,
};
