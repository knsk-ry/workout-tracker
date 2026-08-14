const createText = ({
  fontSize,
  label = "テキスト",
}) => {
  return `<p class="Text ${fontSize}">${label}</p>`;
};

const meta = {
  title: "Components/Text",

  render: (args) => createText(args),

  argTypes: {
    label: {
      control: "text",
    },
  },
};

export default meta;

export const defaultText = {
  args: {
    fontSize: "",
    label: "テキスト",
  },
};

export const Sm = {
  args: {
    fontSize: "--Sm",
    label: "テキスト",
  },
};

export const Lg = {
  args: {
    fontSize: "--Lg",
    label: "テキスト",
  },
};

export const Error = {
  args: {
    fontSize: "--Error",
    label: "テキスト",
  },
};
