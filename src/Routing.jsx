import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
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
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />

          <Route path="/cart" element={<Cart />} />
          <Route
            path="/Payments"
            element={
              <ProtectedRoute
                msg={"you must log in to pay"}
                redirect={"/payments"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
          <Route path="/orders" element={
            <ProtectedRoute
                msg={"you must log in to see your orders"}
                redirect={"/orders"}>
            <Orders />
          </ProtectedRoute>
          } 
          />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
