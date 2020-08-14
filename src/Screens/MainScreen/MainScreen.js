import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import MainScreenStyles from './MainScreenStyle';
import TextInputListed from '../../Components/TextInputListed/TextInputListed';
import storage from '../../api/storage';

const MainScreen = (props) => {
  const [previousSearchs, setPreviousSearchs] = useState([]);

  const searchState = async (city) => {
    if (city.length > 0) {
      const newList = await storage.saveSearchValue(city);
      setPreviousSearchs(newList);
    }
  };

  const removeSearchItem = async (city) => {
    const newList = await storage.removeSearchValue(city);
    setPreviousSearchs(newList);
  };

  const getDetails = () => {
    return <Text style={MainScreenStyles.noDetails}>No Details available</Text>;
  };

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

export default MainScreen;
