import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  console.log(isSubmitting);
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? <span className="loading-spinner loading"></span> : ""}
      {isSubmitting ? <span>sending</span> : text || "submit"}
    </button>
  );
};
export default SubmitBtn;
