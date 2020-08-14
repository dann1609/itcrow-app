import {weatherActions} from '../../reducers/weatherDetails';

export const setWeatherDetails = (data) => {
  return {
    type: weatherActions.SET_DETAILS,
    data: data,
  };
};

export const setLoading = () => {
  return {
    type: weatherActions.SET_LOADING,
  };
};

export const removeLoading = () => {
  return {
    type: weatherActions.REMOVE_LOADING,
  };
};
