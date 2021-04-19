import "./Button.css";
export default function Button({ textButton, handleClick = () => {} }) {
  return (
    <button className="button" onClick={handleClick}>
      {textButton}
    </button>
  );
}
