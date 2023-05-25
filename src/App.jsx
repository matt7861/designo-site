import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AppDesign from "./pages/AppDesign/AppDesign";
import GraphicDesign from "./pages/GraphicDesign/GraphicDesign";
import WebDesign from "./pages/WebDesign/WebDesign";
import Contact from "./pages/Contact/Contact";
import Locations from "./pages/Locations/Locations";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/app-design",
        element: <AppDesign />,
      },
      {
        path: "/graphic-design",
        element: <GraphicDesign />,
      },
      {
        path: "/web-design",
        element: <WebDesign />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/locations",
        element: <Locations />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
