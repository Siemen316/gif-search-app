import React, { useContext, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { MainContext } from '../MainContext';
const Search = () => {
  const { handleQuery, handleLimit } = useContext(MainContext);

  const [value, setValue] = useState('');
  const [selectVal, setSelectVal] = useState('5');

  const handleSubmit = (e) => {
    console.log(selectVal);
    setValue('');
    e.preventDefault();
    if (value) {
      handleQuery(value);
      handleLimit(selectVal);
    } else alert('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for GIFs"
        className="txt"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <select
        className="select-box"
        value={selectVal}
        onChange={(e) => setSelectVal(e.target.value)}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <button className="btn">
        <ImSearch />
      </button>
    </form>
  );
};

export default Search;
