import { useState, useEffect } from 'react';
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

// Components
import Filters from '../components/Filters/filters.component';
import Cards from '../components/Cards/cards.component';
import Pagination from '../components/Pagination/pagination.component';
import Search from '../components/Search/search.component';
import Footer from '../components/footer/footer.component';

// Spinner
import CircleLoader from 'react-spinners/CircleLoader';

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [charactersData, setCharactersData] = useState([]);
  const [info, setInfo] = useState([]);

  // const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    const fetechData = async (url) => {
      try {
        setPending(true);
        const response = await fetch(url);
        const data = await response.json();
        setFetchedData(data);
        setCharactersData(data.results);
        setInfo(data.info);
        setPending(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetechData(api);
  }, [api]);

  return (
    <div style={{ minHeight: '100vh!important' }}>
      <h1 className='text-center'>Characters</h1>
      {/* Search */}
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className='container'>
        <div className='row mx-auto'>
          {/*  Filters */}
          <div className='col-md-3'>
            <Filters
              setPageNumber={setPageNumber}
              setStatus={setStatus}
              setGender={setGender}
              setSpecies={setSpecies}
            />
          </div>
          {/* Cards */}
          <div className='col-md-9'>
            {pending ? (
              <div className='portalLoader'>
                {/* <h2 className='text-success'>L o a d i n g...</h2> */}
                <CircleLoader color='#5cb85c' size={200} />
              </div>
            ) : (
              <Cards
                // characters={fetchedData}
                page='/'
                charactersData={charactersData}
                info={info}
              />
            )}
          </div>
        </div>
      </div>
      {/* Pagination */}
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        info={info}
      />
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Home;
