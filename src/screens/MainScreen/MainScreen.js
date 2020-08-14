import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import MainScreenStyles from './MainScreenStyle';
import TextInputListed from '../../components/TextInputListed/TextInputListed';
import storage from '../../api/storage';
import {getWeatherDetails} from '../../actions/weather';
import color from '../../common/color';

const MainScreen = (props) => {
  const {weatherDetails, dispatch} = props;

  const [previousSearchs, setPreviousSearchs] = useState([]);

  const searchState = async (city) => {
    if (city.length > 0) {
      dispatch(getWeatherDetails(city));
      const newList = await storage.saveSearchValue(city);
      setPreviousSearchs(newList);
    }
  };

  const removeSearchItem = async (city) => {
    const newList = await storage.removeSearchValue(city);
    setPreviousSearchs(newList);
  };

  const getDetails = () => {
    if (weatherDetails.loading) {
      return (
        <ActivityIndicator
          style={MainScreenStyles.noDetails}
          size="large"
          color={color.orange}
        />
      );
    }

    if (weatherDetails.data) {
      const {
        temp,
        temp_min,
        temp_max,
        pressure,
        humidity,
      } = weatherDetails.data.main;

      return (
        <View style={MainScreenStyles.details}>
          <View style={MainScreenStyles.detailsTextContainer}>
            <View style={MainScreenStyles.detailsIndicatorContainer}>
              <Text>Temperature</Text>
              <Text>{temp}</Text>
            </View>
            <View style={MainScreenStyles.detailsIndicatorContainer}>
              <Text>Pressure</Text>
              <Text>{pressure}</Text>
            </View>
            <View style={MainScreenStyles.detailsIndicatorContainer}>
              <Text>Humidity</Text>
              <Text>{humidity}</Text>
            </View>
          </View>
          <View style={MainScreenStyles.detailsTextContainer}>
            <View style={MainScreenStyles.detailsIndicatorContainer}>
              <Text>Max temp</Text>
              <Text>{temp_max}</Text>
            </View>
            <View style={MainScreenStyles.detailsIndicatorContainer}>
              <Text>Min temp</Text>
              <Text>{temp_min}</Text>
            </View>
          </View>
        </View>
      );
    }

    return <Text style={MainScreenStyles.noDetails}>No Details available</Text>;
  };

  console.log(weatherDetails);

  return (
    <View style={{flex: 1}}>
      <TextInputListed
        previousSearchs={previousSearchs}
        onSearch={searchState}
        onRemoveSearch={removeSearchItem}
      />
      {getDetails()}
    </View>
  );
};

const mapStateToProps = (state) => ({
  weatherDetails: state.weatherDetails,
});

export default connect(mapStateToProps)(MainScreen);
