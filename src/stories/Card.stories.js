const meta = {
  title: "Components/Card",
};

export default meta;

export const CardDiv = {
  render: () => `
    <div class="Card">
      <div class="TextBlock">
        <p class="Text">カード内のテキストサンプル</p>
      </div>
    </div>
  `,
};

export const CardSection = {
  render: () => `
    <section class="Card">
      <h2 class="Heading --Level2">H2見出し</h2>
      <div class="TextBlock">
        <p class="Text">カード内のテキストサンプル</p>
      </div>
    </section>
  `,
};

export const CardArticle = {
  render: () => `
    <article class="Card">
      <h2 class="Heading --Level2">H2見出し</h2>
      <div class="TextBlock">
        <p class="Text">カード内のテキストサンプル</p>
      </div>
    </article>
  `,
};