import { useSelector } from "react-redux";
import { SectionTitle, CartItemsList, CartTotals } from "../components";
import { Link } from "react-router-dom";
const Cart = () => {
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  const user = null;
  if (numItemsInCart === 0) {
    return <SectionTitle title="Your Cart is Empty" />;
  }

  return (
    <>
      <SectionTitle title="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:gird-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
