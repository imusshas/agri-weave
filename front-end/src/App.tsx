import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ACCEPT,
  BUY,
  CART,
  DELIVER,
  HOME,
  INVEST,
  LOGIN,
  ORDERS,
  PICK_UP,
  PRODUCT,
  PROFILE,
  REQUEST,
  SCHEME,
  SELL,
  SIGN_UP,
  WISHLIST,
} from "./routes/routes";
import { AppLayout } from "./components/layouts/app/AppLayout";
import { Home } from "./components/layouts/home/Home";
import { Profile } from "./components/layouts/profile/Profile";
import { ProductDetails } from "./components/pages/ProductDetails";
import { Login } from "./components/pages/Login";
import { SignUp } from "./components/pages/SignUp";
import { Cart } from "./components/pages/Cart";
import { Wishlist } from "./components/pages/Wishlist";
import { Orders } from "./components/pages/Orders";
import { Buy } from "./components/UI/Buy";
import { Accept } from "./components/UI/Accept";
import { Invest } from "./components/UI/Invest";
import { Deliver } from "./components/UI/Deliver";
import { getProductList } from "./repo/getProductList";
import { getSchemeList } from "./repo/getSchemeList";
import { getDeliveryList } from "./repo/getDeliveryList";
import { getProductById } from "./repo/getProductById";
import { getUserById } from "./repo/getUserById";
import { Sell } from "./components/UI/Sell";
import { Request } from "./components/UI/Request";
import { Scheme } from "./components/UI/Scheme";
import { PickUp } from "./components/UI/PickUp";

import "./App.css";
import { getOrdersList } from "./repo/getOrdersList";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: HOME,
      element: <AppLayout />,
      children: [
        {
          path: HOME,
          element: <Home />,
          children: [
            { path: BUY, element: <Buy />, loader: getProductList },
            { path: ACCEPT, element: <Accept />, loader: getProductList },
            { path: INVEST, element: <Invest />, loader: getSchemeList },
            { path: DELIVER, element: <Deliver />, loader: getDeliveryList },
          ],
        },
        { path: LOGIN, element: <Login /> },
        { path: SIGN_UP, element: <SignUp /> },
        { path: CART, element: <Cart />, loader: getProductList },
        { path: WISHLIST, element: <Wishlist />, loader: getProductList },
        { path: ORDERS, element: <Orders />, loader: getOrdersList },
        {
          path: `${PRODUCT}/:id`,
          element: <ProductDetails />,
          loader: async ({ params }) => {
            const productId = params.id;
            if (productId === undefined) return;

            return await getProductById(productId);
          },
        },

        {
          path: `${PROFILE}/:id`,
          element: <Profile />,
          loader: async ({ params }) => {
            const userId = params.id;
            if (userId === undefined) return;
            return await getUserById(userId);
          },
          children: [
            { path: SELL, element: <Sell /> },
            { path: REQUEST, element: <Request /> },
            { path: SCHEME, element: <Scheme /> },
            { path: PICK_UP, element: <PickUp /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
