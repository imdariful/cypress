import FilterButton from "../Filters/filterButton.component";

const GenderFilter = ({ setPageNumber, setGender }) => {
  const genders = ["female", "male", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {/* Gender Filter Buttons */}
          {genders.map((items, index) => (
            <FilterButton
              name="gender"
              key={index}
              index={index}
              items={items}
              setPageNumber={setPageNumber}
              task={setGender}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default GenderFilter;
