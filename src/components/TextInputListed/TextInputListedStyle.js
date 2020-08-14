import {StyleSheet} from 'react-native';
import color from '../../common/color';

const TextInputListedStyles = StyleSheet.create({
  container: {
    zIndex: 5,
    elevation: 5,
  },
  cityTitle: {
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: color.orange,
    color: color.white,
    paddingHorizontal: 5,
  },
  cityName: {
    fontSize: 20,
    fontWeight: '600',
    borderWidth: 1,
    borderColor: color.orange,
    paddingHorizontal: 5,
  },
  floatingList: {
    position: 'absolute',
    zIndex: 50,
    elevation: 51,
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.orange,
    paddingHorizontal: 6,
  },
  itemText: {
    color: color.white,
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    tintColor: color.white,
  },
});

export default TextInputListedStyles;
