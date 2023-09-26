import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import ProductPage from "./pages/ProductPage";
import OrderConfirmation from "./pages/OrderConfirmation";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "listing", element: <Listing /> },
      { path: "product-page", element: <ProductPage /> },
      { path: "order-confirmation", element: <OrderConfirmation /> },
      { path: "shopping-cart", element: <ShoppingCart /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
