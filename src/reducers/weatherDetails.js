export const weatherActions = {
  SET_DETAILS: 'SET_DETAILS',
  SET_LOADING: 'SET_LOADING',
  REMOVE_LOADING: 'REMOVE_LOADING',
};

export const weatherDetails = (state = {}, action) => {
  switch (action.type) {
    case weatherActions.SET_DETAILS:
      return {...state, data: action.data};
    case weatherActions.SET_LOADING:
      return {...state, loading: true};
    case weatherActions.REMOVE_LOADING:
      return {...state, loading: false};
    default:
      return state;
  }
};
