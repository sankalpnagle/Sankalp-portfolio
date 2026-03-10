import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#141416",
          color: "#c8c4bc",
          border: "1px solid #c9973a33",
        },
        success: {
          iconTheme: {
            primary: "#c9973a",
            secondary: "#0e0e10",
          },
        },
      }}
    />
  </StrictMode>,
);
