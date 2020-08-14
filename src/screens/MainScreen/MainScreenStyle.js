import {StyleSheet} from 'react-native';

const MainScreenStyles = StyleSheet.create({
  noDetails: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 30,
  },
  details: {},
  detailsTextContainer: {
    flexDirection: 'row',
  },
  detailsIndicatorContainer: {
    flexDirection: 'column',
    width: 0,
    flex: 1,
    alignItems: 'center',
  },
});

export default MainScreenStyles;
