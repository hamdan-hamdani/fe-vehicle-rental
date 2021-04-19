import "./Input.css";
function Input({ outPlaceholder, type = "text" }) {
  return (
    <div>
      <input className="input" type={type} placeholder={outPlaceholder} />
    </div>
  );
}

export default Input;
