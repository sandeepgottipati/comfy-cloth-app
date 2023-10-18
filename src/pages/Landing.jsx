import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";
export const loader = async () => {
  const response = await customFetch(url);

  const { data } = response.data;
  const products = data;

  return { products };
};
const Landing = () => {
  customFetch(url);
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};
export default Landing;
