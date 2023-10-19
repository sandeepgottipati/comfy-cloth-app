import { useSelector } from "react-redux";
import { priceFormatter } from "../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>SubTotal</span>
          <span className="font-medium">{priceFormatter(cartTotal)}</span>
        </p>
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Shipping</span>
          <span className="font-medium">{priceFormatter(shipping)}</span>
        </p>
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Tax</span>
          <span className="font-medium">{priceFormatter(tax)}</span>
        </p>
        <p className="flex justify-between mt-4 text-sm pb-2">
          <span>Order Total</span>
          <span className="font-medium">{priceFormatter(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
