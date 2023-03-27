type InputType = {
    type?: string;
    placeholder: string;
    value: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  
  const Input = (props: InputType) => {
    const { type = "text", value, placeholder, className, onChange } = props;
    return (
      <input
        type={type}
        className={`h-10 w-52 border outline-none px-4 peer rounded-lg ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    );
  };
  
  export default Input;
  