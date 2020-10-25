const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, gifs: action.payload };
    case 'ERROR':
      return { ...state, error: true, isLoading: false };
    case 'HANDLE_QUERY':
      return { ...state, query: action.setValue };
    case 'HANDLE_DROPDOWN':
      return { ...state, limit: action.setNumValue };

    default:
      return state;
  }
};

export default reducer;
