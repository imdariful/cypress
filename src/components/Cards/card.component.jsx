import { useState } from 'react';
import { Link } from 'react-router-dom';
const Card = ({ character, page }) => {
  const {
    id,
    name,
    gender,
    image,
    status,
    type,
    url,
    species,
    location,
    origin,
  } = character;

  const [statusBg, setStatusBg] = useState('');

  const checkStatus = () => {
    if (status === 'Alive') {
      setStatusBg('bg-primary');
    } else if (status === 'Dead') {
      setStatusBg('bg-danger');
    } else {
      setStatusBg('bg-warning text-dark');
    }
  };

  return (
    <Link
      to={`${page}${id}`}
      className='col-sm relative'
      style={{ minWidth: '15rem', textDecoration: 'none' }}
    >
      <div
        className='card h-100 border-2 border-success'
        style={{ paddingLeft: '0px', paddingRight: '0px' }}
      >
        <img src={image} className='card-img-top img-fluid' alt={name} />
        <div className='card-body'>
          <h3 className='card-title mb-1'>{name}</h3>
          <p className='card-text'>{type}</p>
          <p className='card-text mb-1'>{species}</p>
          <div className='card-text mb-1 '>
            <div className='text-muted'>Location:</div>
            {location?.name}
          </div>
          <p className='card-text mb-1'>Origin: {origin?.name}</p>
          {/* Status */}
          {status && status === 'Alive' ? (
            <div
              className={`badge rounded-pill bg-success position-absolute`}
              style={{ top: '10px', right: '20px' }}
            >
              {status}
            </div>
          ) : status === 'Dead' ? (
            <div
              className={`badge rounded-pill bg-danger position-absolute`}
              style={{ top: '10px', right: '20px' }}
            >
              {status}
            </div>
          ) : (
            <div
              className={`badge rounded-pill bg-warning text-dark position-absolute`}
              style={{ top: '10px', right: '20px' }}
            >
              {status}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
export default Card;
