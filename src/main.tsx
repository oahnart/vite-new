import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";

import { Spin } from "antd";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { getLocalStorage } from "utils/localStorage";
import { LANG } from "utils/localStorage/type";
import en from "./locales/en/index.json";
import kr from "./locales/kr/index.json";
import App from "App";

import "global.scss";

const langMultiple = getLocalStorage(LANG, 0);

i18next.init({
  returnNull: false,
  interpolation: { escapeValue: false },
  lng: langMultiple ?? "kr",
  resources: {
    kr: { translation: kr },
    en: { translation: en },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Suspense fallback={<Spin />}>
          <I18nextProvider i18n={i18next}>
            <App />
          </I18nextProvider>
        </Suspense>
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>
);
