import FilterButton from "../Filters/filterButton.component";

const StatusFilter = ({ setStatus, setPageNumber }) => {
  const status = ["Alive", "Dead", "Unknown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse show"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {/* Filter Status Buttons */}
          {status.map((items, index) => (
            <FilterButton
              name="status"
              key={index}
              items={items}
              index={index}
              setPageNumber={setPageNumber}
              task={setStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default StatusFilter;
