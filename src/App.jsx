import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="w-full h-full flex flex-col">
          <Navbar />
          <Home />
        </div>
      ),
    },

    {
      path: "/pastes",
      element: (
        <div className="w-full h-full flex flex-col">
          <Navbar />
          <Paste />
        </div>
      ),
    },
    {
      path: "/pastes/:id",
      element: (
        <div>
          <Navbar />
          <ViewPaste />
        </div>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
