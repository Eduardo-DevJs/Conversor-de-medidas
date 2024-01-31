import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import RemToPx from "./RemToPx/RemToPx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "rem-to-px",
    element: <RemToPx />
  }
])