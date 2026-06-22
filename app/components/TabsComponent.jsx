import React from "react";

const TabsComponent = () => {
  return (
    <div>
      <header className="flex items-center justify-between gap-2 mt-5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-10 items-center gap-2 rounded-lg border bg-body-level-3 px-3 text-16 font-medium capitalize transition-colors border-body-level-4 text-typography-secondary hover:text-accent-blue"
            fdprocessedid="z5ud3e"
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-6"
            >
              <path d="M16 5.07A8 8 0 1 1 4 12v-.26a8 8 0 0 1 12-6.67M12 7.2a.8.8 0 0 0-.8.8v4a.8.8 0 0 0 .8.8h2.8a.8.8 0 1 0 0-1.6h-2V8a.8.8 0 0 0-.7-.8z" />
            </svg>
            Recently played
          </button>
          <button
            type="button"
            className="flex h-10 items-center gap-2 rounded-lg border bg-body-level-3 px-3 text-16 font-medium capitalize transition-colors border-accent-blue/30 text-accent-blue"
            fdprocessedid="ja838f"
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
            >
              <path
                d="M19.4117 12.9522L12.2094 20.0138C12.1533 20.0688 12.0779 20.0996 11.9993 20.0996C11.9208 20.0996 11.8454 20.0688 11.7893 20.0138L4.58698 12.9522C3.84617 12.2247 3.33528 11.2956 3.11771 10.2803C2.90014 9.26503 2.98546 8.2082 3.36309 7.24096C3.69641 6.37848 4.25179 5.61944 4.97295 5.04074C5.69412 4.46203 6.55544 4.08424 7.46963 3.94564C9.17732 3.71545 10.7719 4.40423 11.9993 5.88802C13.228 4.40183 14.8223 3.71335 16.5231 3.94114C17.4931 4.09264 18.4019 4.5109 19.1478 5.14918C19.8938 5.78746 20.4476 6.62062 20.7473 7.55554C21.047 8.49046 21.0808 9.4903 20.845 10.4433C20.6091 11.3964 20.1129 12.265 19.4117 12.9522Z"
                fill="currentColor"
              />
            </svg>
            Favorites
          </button>
        </div>
      </header>
    </div>
  );
};

export default TabsComponent;
