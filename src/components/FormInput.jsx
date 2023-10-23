const FormInput = (props) => {
  const { label, name, type, defaultValue, size } = { ...props };

  return (
    <div className="form-control">
      <label className="label" htmlFor={name}>
        <span className="label-text capitalize"> {label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered input-${size}`}
      />
    </div>
  );
};
export default FormInput;
