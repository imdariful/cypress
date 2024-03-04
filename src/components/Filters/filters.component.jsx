import GenderFilter from '../category/gender.component';
import SpeciesFilter from '../category/species.component';
import StatusFilter from '../category/status.component';

const Filters = ({ setPageNumber, setStatus, setGender, setSpecies }) => {
  const clear = () => {
    setPageNumber(1);
    setStatus('');
    setGender('');
    setSpecies('');
    window.location.reload(false);
  };

  return (
    <div className='mb-4'>
      <h2 className='text-center fw-bold fs-4 mb-2'>Filters</h2>
      <div className='d-flex justify-content-center align-items-center'>
        <div
          style={{ cursor: 'pointer' }}
          className='text-center text-decoration-none btn btn-outline-danger text-dark text-primary mb-4'
          onClick={clear}
        >
          Clear Filters
        </div>
      </div>

      {/* Accordion */}
      <div className='accordion' id='accordionExample'>
        <StatusFilter setPageNumber={setPageNumber} setStatus={setStatus} />
        <SpeciesFilter setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <GenderFilter setPageNumber={setPageNumber} setGender={setGender} />
      </div>
    </div>
  );
};
export default Filters;
