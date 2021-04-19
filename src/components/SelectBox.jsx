import "./SelectBox.css";
function SelectBox({ selectCategory, selectValue }) {
  return (
    <div>
      <select className="container-select" name={selectCategory} id={selectCategory}>
        <option value={selectValue}>{selectValue}</option>
      </select>
    </div>
  );
}

export default SelectBox;
