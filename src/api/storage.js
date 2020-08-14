import AsyncStorage from '@react-native-community/async-storage';

const saveSearchValue = async (value) => {
  const searchList = await getSearchList();

  const filteredSearchList = searchList.filter((item) => item !== value);

  filteredSearchList.push(value);
  if (filteredSearchList.length > 5) {
    filteredSearchList.shift();
  }

  await saveSearchList(filteredSearchList);

  return filteredSearchList;
};

const removeSearchValue = async (value) => {
  const searchList = await getSearchList();

  const filteredSearchList = searchList.filter((item) => item !== value);

  await saveSearchList(filteredSearchList);

  return filteredSearchList;
};

const saveSearchList = async (value) => {
  try {
    if (Array.isArray(value)) {
      await AsyncStorage.setItem('SEARCH_LIST', JSON.stringify(value));
    }
  } catch (e) {
    // saving error
  }
};
const getSearchList = async () => {
  try {
    const searchListString = await AsyncStorage.getItem('SEARCH_LIST');

    if (searchListString !== null) {
      const searchList = JSON.parse(searchListString);

      if (Array.isArray(searchList)) {
        return searchList;
      }
    }
    return [];
  } catch (e) {
    // saving error
    return [];
  }
};

export default {
  saveSearchList,
  removeSearchValue,
  getSearchList,
  saveSearchValue,
};
