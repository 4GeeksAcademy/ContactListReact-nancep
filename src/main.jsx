import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ContactProvider } from "./context/ContactContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactProvider>
        <App />
      </ContactProvider>
    </BrowserRouter>
  </React.StrictMode>
);


