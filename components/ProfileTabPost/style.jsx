import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../Zassets/styles/scaling';

const style = StyleSheet.create({
  ProfileTabPostContainer: {
    flex: 1,
    paddingTop: verticalScale(10),
    backgroundColor: 'white',
  },
  imageContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(21),
    marginBottom: verticalScale(11),
    justifyContent: 'space-between',
  },
  image: {
    maxWidth: horizontalScale(150),
    maxHeight: verticalScale(90),
  },
});

export default style;
