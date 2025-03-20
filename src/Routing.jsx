
import Landing from "./Pages/Landing/Landing";
import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import Payment from "./Pages/Payment/Payment";
import ProductDetail from "./Pages/ProductDetail/ProductDetail"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Componets/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51R1ezgF2bhEuiD08pl9hLevt8kyGXiQEkD3qDvMR94pUtViC9NoAhtmyyQjNbnUz4AWRSmDr5rGm36uJncTo9wxt00mGxdBRun"
);

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/cart" element={<Cart />} />

      {/* Protected routes */}
      <Route
        path="/payments"
        element={
          <ProtectedRoute msg={"You must log in to pay"} redirect={"/auth"}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute
            msg={"You must log in to see your orders"}
            redirect={"/auth"}
          >
            <Orders />
          </ProtectedRoute>
        }
      />

      {/* Other Routes */}
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default Routing;