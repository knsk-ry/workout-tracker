const icons = {
  none: "",

  add: `<svg
  class="Button__icon"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 5l0 14" />
  <path d="M5 12l14 0" />
</svg>`,

  edit: `<svg
  class="Button__icon"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
  <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415" />
  <path d="M16 5l3 3" />
</svg>`,

  calendar: `<svg
  class="Button__icon"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M11 15h1" />
  <path d="M12 15v3" />
</svg>`,
};

const indent = (text, spaces) => {
  const padding = " ".repeat(spaces);

  return text
    .trim()
    .split("\n")
    .map((line) => `${padding}${line}`)
    .join("\n");
};

const createButton = ({
  label = "ボタンテキスト",
  element = "button",
  href = "#",
  variant = "default",
  icon = "none",
  disabled = false,
}) => {
  const variantClass = {
    default: "",
    primary: "--Primary",
    secondary: "--Secondary",
  }[variant];

  const className = ["Button", variantClass].filter(Boolean).join(" ");

  const iconHtml = icons[icon] ?? "";

  const iconMarkup = iconHtml ? `\n${indent(iconHtml, 2)}` : "";

  if (element === "link") {
    return `<a
  href="${href}"
  class="${className}"
>${iconMarkup}
  <span class="Button__text">${label}</span>
</a>`;
  }

  const disabledAttr = disabled ? "\n  disabled" : "";

  return `<button
  type="button"
  class="${className}"${disabledAttr}
>${iconMarkup}
  <span class="Button__text">${label}</span>
</button>`;
};

const meta = {
  title: "Components/Button",

  render: (args) => createButton(args),

  argTypes: {
    element: {
      control: "select",
      options: ["button", "link"],
    },

    label: {
      control: "text",
    },

    href: {
      control: "text",
      if: {
        arg: "element",
        eq: "link",
      },
    },

    variant: {
      control: "select",
      options: ["default", "primary", "secondary"],
    },

    icon: {
      control: "select",
      options: ["none", "add", "edit", "calendar"],
    },

    disabled: {
      control: "boolean",
      if: {
        arg: "element",
        eq: "button",
      },
    },
  },
};

export default meta;

export const Default = {
  args: {
    element: "button",
    label: "デフォルトボタン",
    href: "#",
    variant: "default",
    icon: "none",
    disabled: false,
  },
};

export const Link = {
  args: {
    element: "link",
    label: "詳細を見る",
    href: "/menu/",
    variant: "primary",
    icon: "none",
    disabled: false,
  },
};

export const Primary = {
  args: {
    label: "プライマリボタン",
    variant: "primary",
    icon: "none",
    disabled: false,
  },
};

export const Secondary = {
  args: {
    label: "セカンダリボタン",
    variant: "secondary",
    icon: "none",
    disabled: false,
  },
};

export const WithIcon = {
  args: {
    label: "アイコン付きボタン",
    variant: "primary",
    icon: "add",
    disabled: false,
  },
};
