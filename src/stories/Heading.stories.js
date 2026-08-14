const createHeading = ({ element = "h1", label = "見出しテキスト" }) => {
  switch (element) {
    case "h2":
      return `<h2 class="Heading --Level2">
          <span class="Heading__text">${label}</span>
        </h2>`;

    case "h3":
      return `<h3 class="Heading --Level3">
          <span class="Heading__text">${label}</span>
        </h3>`;

    case "h1":
    default:
      return `<h1 class="Heading --Level1">
          <span class="Heading__text">${label}</span>
        </h1>`;
  }
};

const meta = {
  title: "Components/Heading",

  render: (args) => createHeading(args),

  argTypes: {
    element: {
      control: false,
      table: {
        disable: true,
      },
    },

    label: {
      control: "text",
    },
  },
};

export default meta;

export const Level1 = {
  args: {
    element: "h1",
    label: "H1 見出しテキスト",
  },
};

export const Level2 = {
  args: {
    element: "h2",
    label: "H2 見出しテキスト",
  },
};

export const Level3 = {
  args: {
    element: "h3",
    label: "H3 見出しテキスト",
  },
};
