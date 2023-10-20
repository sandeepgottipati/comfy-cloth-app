import { useDispatch } from "react-redux";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { priceFormatter, generateAmountOptions } from "../utils";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const editItemFromCart = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-200 pb-6 last:border-b-0"
    >
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      <div className="sm:ml-16 sm:w-48 ">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-neutral-content text-sm">
          {company}
        </h4>
        <p className="mt-4 capitalize text-sm flex items-center gap-x-2">
          color:{" "}
          <span
            className="badge badge-sm "
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            value={amount}
            onChange={editItemFromCart}
            name="amount"
            id="amount"
            className="mt-2 select select-base select-xs select-bordered"
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        <button
          className="mt-2 link link-hover link-primary text-sm"
          onClick={removeItemFromCart}
        >
          remove
        </button>
        <p className="font-medium sm:ml-auto">{priceFormatter(price)}</p>
      </div>
    </article>
  );
};
export default CartItem;
