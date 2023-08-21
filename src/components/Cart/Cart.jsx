import React from "react";
import "./cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  // Get the products from the Redux store
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  // Calculate the total price of items in the cart
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  // Load Stripe with your publishable key
  const stripePromise = loadStripe('pk_test_51Nh8aOFJOqhv3053x1RQF8aROyyt8AXUWxtY5VHvp0ZUKeYlu24GRux3TC8bALDJ3o68h10UshxFNIxoeUvXDqHq008yG8u5Lr')
    

  // Handle the payment process
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      // Make a request to your server to create a Stripe session
      const res = await makeRequest.post("/orders", {
        products,
      });
      // Redirect the user to the Stripe Checkout page
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          {/* Remove item from cart on click */}
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      {/* Proceed to checkout button */}
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      {/* Reset cart button */}
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
