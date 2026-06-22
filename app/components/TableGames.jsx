import React from "react";

const TableGames = () => {
  return (
    <div>
      <section>
        <header className="flex items-center justify-between gap-2 mt-5">
          <h4 className="flex items-center gap-2 text-18 font-semibold capitalize text-typography-blue lg:text-20">
            <a
              className="flex items-center gap-2 transition-colors hover:text-accent-blue"
              href="/casino/categories/table_games"
              data-discover="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                className="size-6"
              >
                <path
                  fill="currentColor"
                  d="M2.236 11.63c-.42-.62-.265-1.469.344-1.896l.654-.458 1.633 6.242-2.63-3.888ZM16.077 6.937c-.008-.002.191-.662.291-.99a3.95 3.95 0 0 0-2.018-.039l.263 1a2.953 2.953 0 0 1 1.464.029Z"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M13.164 6.011A1.344 1.344 0 0 0 11.87 5a1.32 1.32 0 0 0-.348.047L5.17 6.78a1.366 1.366 0 0 0-.948 1.67l2.775 10.539c.16.61.702 1.01 1.293 1.01.115 0 .232-.014.348-.046l3.483-.95a2.654 2.654 0 0 1-.03-.407v-5.071c0-1.368 1.044-2.497 2.37-2.59L13.164 6.01Zm-4.945 7.204a.363.363 0 0 1-.102-.387l.972-2.929a.353.353 0 0 1 .572-.156l2.28 2.042a.364.364 0 0 1 .102.387L11.07 15.1a.353.353 0 0 1-.572.157l-2.28-2.042ZM15.084 7.967c.376-.04.755.033 1.09.212.447.24.784.651.934 1.143a1.976 1.976 0 0 1-.202 1.606H15.67L14.9 7.996c.061-.013.123-.022.185-.03ZM18.785 7.863a4.052 4.052 0 0 0-1.543-1.552l-.52.888c.484.267.887.664 1.165 1.149.025-.023.609-.333.898-.485Zm-.605 1.176.98-.272c.2.704.21 1.451.03 2.161h-.733l-.291-.116a3.108 3.108 0 0 0 .014-1.773Z"
                  clipRule="evenodd"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M14.638 12.12c-.76 0-1.377.632-1.377 1.405v5.071l.001.072.002.023c.046.705.607 1.27 1.303 1.307l.07.002h4.986c.736 0 1.338-.592 1.375-1.332l.002-.072v-5.071c0-.75-.58-1.365-1.306-1.402l-.071-.002H14.638Zm3.913 6.353.046.001a.911.911 0 0 0 .903-.872v-.048a.912.912 0 0 0-.903-.922.914.914 0 0 0-.904.922c0 .491.381.894.858.92Zm-3.794-3.907c0 .491.381.894.86.92h.047a.913.913 0 0 0 .902-.872l.002-.048a.914.914 0 0 0-.904-.922.894.894 0 0 0-.641.27.93.93 0 0 0-.266.652Z"
                  clipRule="evenodd"
                />
              </svg>
              Table Games
            </a>
          </h4>
          <a
            className="flex h-8 items-center justify-center gap-2 rounded-md bg-body-level-3 px-3 text-14 font-medium text-white transition-colors hover:bg-body-level-4 lg:h-10 lg:px-4"
            href="/casino/categories/table_games"
            data-discover="true"
          >
            See All
          </a>
        </header>
        <div className="grid w-full snap-x snap-mandatory grid-cols-[repeat(3,minmax(105px,1fr))] gap-x-2 overflow-x-auto scroll-smooth sm:grid-cols-3 sm:gap-x-3">
          <a
            className="aspect-[498/669] flex-shrink-0 snap-start sm:aspect-auto sm:h-auto sm:w-auto"
            href="/casino/categories/blackjack"
            data-discover="true"
          >
            <img
              alt="blackjack"
              className="h-full w-full object-cover"
              src="https://winna.com/assets/webp/DxINuHeO.webp"
            />
          </a>
          <a
            className="aspect-[498/669] flex-shrink-0 snap-start sm:aspect-auto sm:h-auto sm:w-auto"
            href="/casino/categories/roulette"
            data-discover="true"
          >
            <img
              alt="roulette"
              className="h-full w-full object-cover"
              src="https://winna.com/assets/webp/DxINuHeO.webp"
            />
          </a>
          <a
            className="aspect-[498/669] flex-shrink-0 snap-start sm:aspect-auto sm:h-auto sm:w-auto"
            href="/casino/categories/baccarat"
            data-discover="true"
          >
            <img
              alt="baccarat"
              className="h-full w-full object-cover"
              src="https://winna.com/assets/webp/DxINuHeO.webp"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default TableGames;
