import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./appContext.jsx";
import { Theme } from "@radix-ui/themes";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <Theme>
        <App />
      </Theme>
    </ContextProvider>
  </StrictMode>
);
