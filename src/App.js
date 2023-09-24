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

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "Listing", element: <Listing /> },
      { path: "ProductPage", element: <ProductPage /> },
      { path: "OrderConfirmation", element: <OrderConfirmation /> },
      { path: "ShoppingCart", element: <ShoppingCart /> },
      { path: "Checkout", element: <Checkout /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
