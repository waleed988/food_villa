import { createRoot } from "react-dom/client";
import { appRouter } from "./App";
import { RouterProvider } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
