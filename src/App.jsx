import { ErrorElement } from "./components";
import {
  HomeLayout,
  Landing,
  SingleProduct,
  Products,
  Cart,
  About,
  Login,
  Register,
  Checkout,
  Orders,
  Error,
} from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/singleProduct";
import { loader as ProductsLoader } from "./pages/Products";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "products",
        element: <Products />,
        loader: ProductsLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
