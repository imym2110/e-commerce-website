import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RouteComponent from "./RouteComponent";
import Catalogue from "./components/Catalogue";
import { Provider } from "react-redux";
import { Store } from "./store/ReduxCart";
import ProductDetail from "./pages/ProductDetail";
import Caart from "./pages/Caart";
import Checkout from "./pages/Checkout";
import "./App.css";

const path = createBrowserRouter([
  {
    path: "/",
    element: <RouteComponent />,
    children: [
      { path: "/", element: <Catalogue /> },
      { path: "productdetail/:id", element: <ProductDetail /> },
      { path: "cart", element: <Caart /> },
      { path: "cart/checkout", element: <Checkout /> },
    ],
  },
]);
function App() {
  return (
    <Provider store={Store}>
      <RouterProvider router={path}></RouterProvider>
    </Provider>
  );
}

export default App;
