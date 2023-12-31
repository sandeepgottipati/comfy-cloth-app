import { useLoaderData, Link, Form } from "react-router-dom";
import FormInput from "./FormInput";

import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";
const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, order, shipping, price } = params;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 items-center grid gap-x-4  gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        name="category"
        list={meta.categories}
        label="select category"
        size="select-sm"
        defaultValue={category}
      />
      <FormSelect
        name="company"
        label="select company"
        list={meta.companies}
        defaultValue={company}
        size="select-sm"
      />
      <FormSelect
        name="order"
        label="sort by"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      <FormRange
        label="select price"
        size="range-sm"
        name="price"
        defaultValue={price}
      />
      <FormCheckBox
        name="shipping"
        label="free Shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      <button type="submit" className="btn btn-primary btn-sm md:mt-8 lg:mt-0">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm md:mt-8 lg:mt-0">
        reset
      </Link>
    </Form>
  );
};
export default Filters;
