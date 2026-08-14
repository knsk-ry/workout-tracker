/** @type { import('@storybook/html-vite').Preview } */

import "../src/assets/styles/reset.css";
import "../src/assets/styles/base.css";
import "../src/assets/styles/components.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    docs: {
      codePanel: true,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;