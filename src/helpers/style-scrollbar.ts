export const styleScrollbars = async () => {
  const content = document.querySelectorAll('ion-content');

  content.forEach((c) => {
    const styles = document.createElement('style');

    styles.textContent = `
        ::-webkit-scrollbar {
          width: auto;
          max-width: 8px;
        }
        ::-webkit-scrollbar-button {
          width: 0px;
          height: 0px;
        }
        ::-webkit-scrollbar-track {
          max-width: 8px;
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: var(--scroll-color);
          border: 0px none #ffffff;
          border-radius: 53px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--scroll-color-hover);
        }
        ::-webkit-scrollbar-thumb:active {
          background: var(--scroll-color-active);
        }
        ::-webkit-scrollbar-corner {
          background: transparent;
        }
    `;

    c?.shadowRoot?.appendChild(styles);
  });
};
