import { useLoaderData, Link } from "react-router-dom";
import { priceFormatter } from "../utils";
const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-3 pt-12">
      {products.map((product) => {
        const { title, image, price } = product.attributes;
        const amountUsd = priceFormatter(price);
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-200 "
          >
            <figure className="pt-4 px-4">
              <img
                src={image}
                alt={title}
                className=" rounded-xl h-64 w-full md:h-48 object-cover "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <p className="text-secondary">{amountUsd}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
