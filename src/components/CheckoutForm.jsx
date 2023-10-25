import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";
import { customFetch, priceFormatter } from "../utils";
import { redirect, Form } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: priceFormatter(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      queryClient.removeQueries(["orders"]);
      store.dispatch(clearCart());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";

      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
      return null;
    }
  };
const CheckoutForm = () => {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput label="address" name="address" type="text" />
      <FormInput label="first name" name="name" type="text" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};
export default CheckoutForm;
