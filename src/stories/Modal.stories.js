const meta = {
  title: "Components/Modal",
};

export default meta;

export const ModalDefault = {
  render: () => `
    <dialog id="modal" class="Modal" aria-labelledby="modalTitle">
      <div class="Modal__inner">
        <h2 id="modalTitle" class="Modal__title">モーダル見出し</h2>
        <p class="Text">モーダルコンテンツ</p>
        <button type="button" class="Modal__close">
          <span class="Modal__closeText">閉じる</span>
        </button>
      </div>
    </dialog>
  `,
};

export const ModalOpened = {
  render: () => `
    <dialog id="modal" class="Modal" aria-labelledby="modalTitle" open>
      <div class="Modal__inner">
        <h2 id="modalTitle" class="Modal__title">モーダル見出し</h2>
        <p class="Text">モーダルコンテンツ</p>
        <button type="button" class="Modal__close">
          <span class="Modal__closeText">閉じる</span>
        </button>
      </div>
    </dialog>
  `,
};
