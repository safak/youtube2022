import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Children } from "react";
//imports routes
import Home from "./pages/Home/home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
//import components
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import Slider from "./components/Slider/slider";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import "./app.scss"
import Categories from "./components/Categories/Categories";



const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

//routes path
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
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
