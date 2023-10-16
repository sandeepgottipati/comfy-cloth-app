import { useLoaderData, Link } from "react-router-dom";
import { priceFormatter } from "../utils";
const ProductList = () => {
  const { products } = useLoaderData();

  return (
    <div>
      {products.map((product) => {
        const { image, title, price, company } = product.attributes;
        // console.log(image);
        const dollarsAmount = priceFormatter(price);

        return (
          <Link
            to={`/products/${product.id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row flex-wrap space-y-4 shadow-xl hover:shadow-2xl duration-300 group"
            key={product.id}
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 group-hover:scale-105 transition duration-300"
            />
            <div className="ml-0 sm:ml-16">
              <h2 className="capitalize font-medium text-xl">{title}</h2>
              <h4 className="capitalize font-medium  text-neutral-content text-md">
                {company}
              </h4>
            </div>
            <p className="font-medium text-xl ml:0 sm:ml-auto ">
              {dollarsAmount}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductList;
