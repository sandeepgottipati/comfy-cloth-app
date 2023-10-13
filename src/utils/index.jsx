import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({ baseURL: productionUrl });

export const priceFormatter = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
};

/*Genereate amount options for checkbox */
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
