import { useLoaderData, Link } from "react-router-dom";
import { priceFormatter, customFetch, generateAmountOptions } from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch.get(`/products/${id}`),
  };
};
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );

    const productData = response.data.data;
    return productData;
  };
const SingleProduct = () => {
  const productData = useLoaderData();

  const { image, title, price, description, colors, company } =
    productData.attributes;
  const dollarsAmount = priceFormatter(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  const dispatch = useDispatch();
  const cartProduct = {
    cartID: productData.id + productColor,
    productID: productData.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  return (
    <section>
      {/*Bread Crumb navigation  */}
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/*Product  */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className=" w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/*Product Info*/}
        <div>
          <h1 className="text-4xl font-bold capitalize">{title}</h1>
          <h4 className=" text-neutral-content font-bold mt-2">{company}</h4>
          <p className="mt-4 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div>
            <h4 className="font-bold my-4 ">colors</h4>
            {colors.map((color) => {
              return (
                <button
                  style={{ backgroundColor: color }}
                  key={color}
                  type="button"
                  className={`badge  h-6 w-6 mr-2 ${
                    color === productColor && "border-2 border-secondary"
                  }`}
                  onClick={() => setProductColor(color)}
                ></button>
              );
            })}
          </div>
          <div>
            <h4 className="font-bold my-4 ">Amount</h4>
            <select
              className="select select-secondary w-full max-w-xs "
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(10)}
            </select>
          </div>
          <div className="mt-10">
            <button className="btn  btn-secondary btn-md" onClick={addToCart}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
