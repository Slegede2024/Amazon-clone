import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./Componets/DataProvider/DataProvidere.jsx";
import { initialState,reducer } from "./Utility/reducer.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
     <BrowserRouter basename="/amazon-clone"> {/* ✅ Fixes routing issue */}
    <DataProvider reducer={reducer} initialState={initialState}>
    <App />
    </DataProvider>
    </BrowserRouter>
    
  </StrictMode>,
);
