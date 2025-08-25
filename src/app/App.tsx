import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeConfig } from "./providers/router/routerConfig";

import "./App.css";

export default function App() {
  const router = createBrowserRouter(routeConfig);

  return (
    <RouterProvider router={router} />
  );
}
