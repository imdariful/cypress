import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const CardDetails = () => {
  const { id } = useParams();

  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const [characterData, setCharacterData] = useState([]);
  const { name, status, species, gender, origin, location, image, type } =
    characterData;

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    const fetechData = async (url) => {
      try {
        setPending(true);
        const response = await fetch(url);
        const data = await response.json();
        setCharacterData(data);
        setPending(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetechData(api);
  }, [api]);
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center my-2 mb-4'>
      <div className='d-flex flex-column gap-3'>
        <h1 className='text-center mt-4'>{name}</h1>
        <img src={image} alt={name} className='img-fluid' />
        {status && status === 'Alive' ? (
          <div
            className={`fs-5 badge bg-success`}
            style={{ top: '10px', right: '20px' }}
          >
            {status}
          </div>
        ) : status === 'Dead' ? (
          <div
            className={`fs-5 badge bg-danger`}
            style={{ top: '10px', right: '20px' }}
          >
            {status}
          </div>
        ) : (
          <div
            className={`fs-5 badge bg-warning text-dark`}
            style={{ top: '10px', right: '20px' }}
          >
            {status}
          </div>
        )}
        <div className='content'>
          <div className=''>
            <span className='fw-bold'>Gender: </span> {gender}
          </div>
          <div className=''>
            <span className='fw-bold'>Species: </span> {species}
          </div>
          {type && (
            <div className=''>
              <span className='fw-bold'>Type: </span> {type}
            </div>
          )}
          <div className=''>
            <span className='fw-bold'>Location: </span> {location?.name}
          </div>
          <div className=''>
            <span className='fw-bold'>Origin: </span> {origin?.name}
          </div>
        </div>
      </div>
      <Link
        to={'/'}
        className='btn btn-success my-3'
        style={{ textDecoration: 'none' }}
      >
        Back to 🏠
      </Link>
    </div>
  );
};
export default CardDetails;
