import weatherApi from '../api/weatherApi';
import {
  removeLoading,
  setLoading,
  setWeatherDetails,
} from './reducers/wheaterDetails';

export function getWeatherDetails(city) {
  return function (dispatch, getState) {
    dispatch(setLoading());

    return weatherApi.getCityWeather(city).then((response) => {
      console.log(response);
      if (!response.error && response.cod === 200) {
        dispatch(setWeatherDetails(response));
      } else {
        dispatch(setWeatherDetails());
      }
      dispatch(removeLoading());
    });
  };
}
