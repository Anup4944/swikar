import "./MyButton.css";

const MyButton = ({ title, variant, size, ...rest }) => {
  return (
    <div className={`button bg-${variant} btn-${size}`} {...rest}>
      {title}
    </div>
  );
};

export default MyButton;
