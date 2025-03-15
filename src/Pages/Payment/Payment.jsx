import { useContext, useState } from "react";
import LayOut from "../../Componets/LayOut/LayOut";
import classes from "./Payment.module.css";
import { DataContext } from "../../Componets/DataProvider/DataProvidere";
import ProductCard from "../../Componets/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Componets/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";


function Payment() {
  const [{ user, basket}, dispatch] = useContext(DataContext);
  // Calculate total items
  const totalItems =
    basket?.reduce((amount, item) => amount + item.amount, 0) || 0;


     const totalprice = basket.reduce(
       (sum, item) => sum + item.price * item.amount,
       0
     );


const [cardError, setCardError] = useState(null);
const [processing, setProcessing] = useState(false);

const stripe = useStripe();
const elements = useElements();
const navigate = useNavigate();

const handelChange = (e) => {
  // console.log(e);
e?.error?.message?  setCardError(e?.error?.message): setCardError("");
  };

  const handlePayment =  async(e) => { 
    e.preventDefault();

    try {
      setProcessing(true);
      // 1 -backend || functions -----> contact to the cliient secret

      const response = await axiosInstance({
        method: "POST",
        url: `/payments/create?total=${totalprice * 100}`,
      });

      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;

      // 2 -client side (react side confirmation)
      const{ paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      console.log(paymentIntent);

      // 3 - after the confirmation ---> order firestore database save  ,clear basket
    
    await db
      .collection("users")
      .doc(user.uid)
      .collection("orders")
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });

      // empty the basket

      dispatch({ type: Type.EMPTY_BASKET });
    
      setProcessing(false)
      navigate("/orders", {state:{msg:"you have placed new Order"}});
    } catch (error) {
      console.error(error);
      setProcessing(false);
    }

  

   

  };
  return (
    <LayOut>
      {/* Header */}
      <div className={classes.payment__header}>
        Checkout ({totalItems}) items
      </div>

      {/* Payment method section */}
      <section className={classes.payment}>
        {/* Address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>{user?.email}</div>
          <div>1919 Fruitdale Avenue</div>
          <div>San Francisco, CA</div>
        </div>
        <hr />

        {/* Product review */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.length > 0 ? (
              basket.map((item) => (
                <ProductCard key={item.id} data={item} flex={true} />
              ))
            ) : (
              <p>No items in your basket.</p>
            )}
          </div>
        </div>
        <hr />

        {/* Payment methods */}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <form onSubmit={handlePayment}> 
            {cardError && <small>{cardError}</small>}
            <CardElement onChange={handelChange}/>
           
           {/* Price */}

           <div>
            <div>
              <span>
             Total Order  | <CurrencyFormat amount={totalprice} />
            </span>
            </div>
            <button type="submit">

              {processing? (
                <div className={classes.loading}>
                <ClipLoader color="gray"size={20} />  
                <p>Please Wait....</p>   

                </div>
               ): "Pay Now"
              }
            </button>
           </div>




          </form>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
