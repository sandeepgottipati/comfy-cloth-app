import { useSelector } from "react-redux";
import { SectionTitle, CartTotals, CheckoutForm } from "../components";
import { redirect } from "react-router-dom";

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  } else {
    return null;
  }
};
const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  if (cartItems.length === 0) {
    return <SectionTitle title="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle title="place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
