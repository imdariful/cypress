// import CSS
import './filterButton.styles.scss';

const FilterButton = ({ name, index, items, setPageNumber, task }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input radioBtn"
        type="radio"
        name={name}
        id={`${name}-${index}`}
        data-test={`${name}-${index}`}
        onClick={() => {
          setPageNumber(1);
          task(items);
        }}
      />
      <label className="btn btn-outline-success" htmlFor={`${name}-${index}`}>
        {items}
      </label>
    </div>
  );
};
export default FilterButton;
