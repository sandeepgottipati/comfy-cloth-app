import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";
export const loader = async () => {
  const response = await customFetch(url);
  //console.log(response);
  const { data } = response.data;
  //console.log("from landing loader");
  //console.log(data);
  const featuredProducts = data;

  return featuredProducts;
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
