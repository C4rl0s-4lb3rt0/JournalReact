import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux'
import { JournalApp } from "./JournalApp";
import { store } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>  
  </StrictMode>
);
