import Card from './card.component';

const Cards = ({ charactersData, page }) => {
  // const { info, results: charactersData } = characters;

  if (charactersData) {
    return (
      <div className='row gap-2'>
        {charactersData?.map((character) => (
          <Card page={page} key={character.id} character={character} />
        ))}
      </div>
    );
  } else {
    return (
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ width: '100%', height: '100%' }}
      >
        <h2 className='fw-bold text-success'>😵‍💫 No data found 😵‍💫</h2>
      </div>
    );
  }
};
export default Cards;
