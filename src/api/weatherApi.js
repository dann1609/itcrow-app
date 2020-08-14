import Environments from '../config/environments';

export default {
  getCityWeather: function (city) {
    let afterParams = `?q=${city}&appid=${Environments.APPID}`;
    const url = `${Environments.BASE}${Environments.WEATHER}${afterParams}`;
    console.log(url);
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log('error');
        console.log(url);
        console.error(error);
        return {
          error: {
            message: "Can't reach server",
          },
        };
      });
  },
};
