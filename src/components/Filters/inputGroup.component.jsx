const InputGroup = ({ totalPage, name, setId }) => {
  return (
    <div className='input-group mb-3'>
      <select
        className='form-select'
        onChange={(event) => setId(event.target.value)}
        id={name}
      >
        {[...Array(totalPage).keys()].map((count) => {
          return (
            <option value={count + 1} key={count}>
              {name} - {count + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default InputGroup;
