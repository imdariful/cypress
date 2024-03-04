import styles from './search.module.scss';

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form
      action=''
      className='d-flex flex-md-row flex-column align-items-center justify-content-center gap-4 mb-5'
    >
      <input
        onChange={(event) => {
          setPageNumber(1);
          setSearch(event.target.value);
        }}
        placeholder='🔍search for characters'
        type='text'
        className={styles.input}
      />
      {/* <button
        onClick={(event) => {
          event.preventDefault();
        }}
        className={`btn btn-success ${styles.btn}`}
      >
        Search
      </button> */}
    </form>
  );
};
export default Search;
