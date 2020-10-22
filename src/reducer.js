const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, gifs: action.payload };
    case 'ERROR':
      return { ...state, error: true, isLoading: false };

    default:
      return state;
  }
};

export default reducer;
