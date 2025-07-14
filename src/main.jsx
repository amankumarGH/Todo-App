import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Store } from "./Store.jsx";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <div>
        <App />
        <Toaster position="top-right" />
      </div>
    </Provider>
  </StrictMode>
);
