import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import TextInputListedStyles from './TextInputListedStyle';
import clear from '../../assets/icons/clear.png';

const ItemList = (props) => {
  const {item, onPress, onClearPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={TextInputListedStyles.item}>
        <Text style={TextInputListedStyles.itemText} id={item.id}>
          {item.title}
        </Text>
        <TouchableOpacity onPress={onClearPress}>
          <Image style={TextInputListedStyles.image} source={clear} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const TextInputListed = (props) => {
  const {onSearch, previousSearchs, onRemoveSearch} = props;
  const [city, onChangeCity] = useState('');
  const [listVisible, setListVisible] = useState(false);

  const onEndEditing = () => {
    onSelectCity(city);
    setListVisible(false);
  };

  const onSelectCity = (city) => {
    onSearch(city.trim());
    onChangeCity(city.trim());
  };

  const reversedList = previousSearchs.map((search) => ({
    id: search,
    title: search,
  }));

  reversedList.reverse();

  return (
    <View style={TextInputListedStyles.container}>
      <Text style={TextInputListedStyles.cityTitle}>City Name</Text>
      <TextInput
        style={TextInputListedStyles.cityName}
        onChangeText={(text) => onChangeCity(text)}
        value={city}
        onEndEditing={onEndEditing}
        onFocus={() => {
          setListVisible(true);
        }}
      />
      {listVisible && (
        <View>
          <FlatList
            style={TextInputListedStyles.floatingList}
            data={reversedList}
            renderItem={({item}) => (
              <ItemList
                item={item}
                onPress={() => onSelectCity(item.title)}
                onClearPress={() => onRemoveSearch(item.title)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </View>
  );
};

export default TextInputListed;
