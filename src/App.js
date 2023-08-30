import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Download from "./components/Download";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/download",
    element: <Download />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
