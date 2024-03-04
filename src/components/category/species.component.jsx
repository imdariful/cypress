import FilterButton from "../Filters/filterButton.component";

const SpeciesFilter = ({ setSpecies, setPageNumber }) => {
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {/* Species Filter Buttons */}
          {species.map((items, index) => (
            <FilterButton
              name="species"
              key={index}
              index={index}
              items={items}
              task={setSpecies}
              setPageNumber={setPageNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SpeciesFilter;
