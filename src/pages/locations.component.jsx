import { useEffect, useState } from 'react';
import Cards from '../components/Cards/cards.component';
import Card from '../components/Cards/card.component';
import InputGroup from '../components/Filters/inputGroup.component';

const Location = () => {
  const [id, setId] = useState(1);
  const [episodeDetails, setEpisodeDetails] = useState([]);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const [results, setResults] = useState([]);
  // const [characters, setCharacters] = useState([]);

  const { name, type, dimension } = episodeDetails;

  const api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    const fetechData = async (url) => {
      try {
        setPending(true);
        const response = await fetch(url);
        const data = await response.json();
        setEpisodeDetails(data);

        const allCharacters = await Promise.all(
          data?.residents?.map(async (url) => {
            return await fetch(url)
              .then((res) => res.json())
              .catch((error) => console.log(error));
          })
        );
        setResults(allCharacters);
        setPending(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetechData(api);
  }, [api]);

  return (
    <div className='container' style={{ minHeight: '100vh!important' }}>
      <div className='row mb-4'>
        <h1 className='text-center'>
          Location:{' '}
          <span className='text-success'>{name === '' ? 'Unknown' : name}</span>
        </h1>
        <h5 className='text-center'>
          {dimension === '' ? 'Unknown' : dimension}
        </h5>
        <h6 className='text-center'>{type === '' ? 'Unknown' : type}</h6>
      </div>
      <div className='row'>
        <div className='col-md-3'>
          <h3 className='text-center fw-bold fs-4 mb-2'>Pick Location</h3>
          <InputGroup setId={setId} totalPage={126} name='Location' />
        </div>
        <div className='col-md-8'>
          <div className='row'>
            {pending ? (
              'Loading'
            ) : (
              <Cards page='/locations/' charactersData={results} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Location;
