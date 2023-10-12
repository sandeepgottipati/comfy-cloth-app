import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-gray-500">singleProduct</h2>
    </div>
  );
};
export default SingleProduct;
