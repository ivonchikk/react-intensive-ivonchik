import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.tsx";
import { StoreProvider } from "./app/providers/store/StoreProvider.tsx";

createRoot(document.getElementById("root")!).render(<StoreProvider>{<App />}</StoreProvider>);
