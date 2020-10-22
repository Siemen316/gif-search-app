import Axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import reducer from './reducer';
export const MainContext = React.createContext();
require('dotenv').config();

const initialState = {
  isLoading: true,
  error: false,
  gifs: [],
};

const API_KEY = process.env.REACT_APP_API_KEY;

const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [query, setQuery] = useState('city');
  const [limit, setLimit] = useState('5');

  useEffect(() => {
    dispatch({ type: 'LOADING' });
    Axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&rating=r`
    )
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data.data });
      })
      .catch((err) => {
        dispatch({ type: 'ERROR' });
      });
  }, [query, limit]);

  const handleQuery = (value) => {
    setQuery(value);
  };

  const handleLimit = (selectVal) => {
    setLimit(selectVal);
  };

  return (
    <MainContext.Provider value={{ ...state, handleQuery, handleLimit, query }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
