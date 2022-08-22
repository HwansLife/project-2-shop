import StripeCheckout from "react-stripe-checkout";

const Pay = () => {

    const onToken = (token) => {
        console.log(token);
    }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Hwan's shop"
        img="https://img.icons8.com/ios/250/FFFFFF/barcode.png"
        billingAddress
        shippingAddress
        description="Your total is ₩ 54,000"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
