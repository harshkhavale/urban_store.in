import React from "react";
import Navbar from "../components/Navbar.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";
import StripeCheckout from "react-stripe-checkout";
import { bag } from "../assets/index.js";
const Payment = () => {
  const STRIPE_KEY = "pk_test_51NjvWuSBPcBJMasLnoEBEg0vlMIyHnY45klxTnGgWqmKwb64ccK0vaL5BdJxLBuKRQh8jnkxxfpfooPxpFBaK56G00L8Nb0e10";
  const onToken = (token)=>{
console.log(token);
  }
  return (
    <div>
      <div className="paymentpage my-12">
        <StripeCheckout 
        name="urban_store.in"
        image={bag}
        billingAddress
        shippingAddress
        description="ypur total is $20"
        amount={20000}
        token={onToken}
        stripeKey={STRIPE_KEY}

        >
        <button className="bg-black text-white rounded-lg">click me</button>

        </StripeCheckout>
      </div>
      
    </div>
  );
};

export default Payment;
