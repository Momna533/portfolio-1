const Button = ({ varient, href, text, onClick, className }) => {
  if (varient === "link") {
    return (
      <a href={href} className={className}>
        {text}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
