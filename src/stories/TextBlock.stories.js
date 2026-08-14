const createTextBlock = ({
  spaceSize,
  label = "テキスト",
}) => {
  return `<div class="TextBlock ${spaceSize}">
      <p class="Text">${label}</p>
    </div>`;
};

const meta = {
  title: "Components/TextBlock",

  render: (args) => createTextBlock(args),

  argTypes: {
    label: {
      control: "text",
    },
  },
};

export default meta;

export const defaultTextBlock = {
  args: {
    spaceSize: "",
    label: "テキストブロック内のテキストサンプル",
  },
};

export const spaceLgTextBlock = {
  args: {
    spaceSize: "--SpaceLg",
    label: "余白の大きいテキストブロック内のテキストサンプル",
  },
};
