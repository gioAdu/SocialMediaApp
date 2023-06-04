import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../Zassets/styles/scaling';

const style = StyleSheet.create({
  header: {
    paddingTop: verticalScale(30),
    paddingRight: horizontalScale(17),
    paddingLeft: horizontalScale(26),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    backgroundColor: '#f5f4f4',
    padding: horizontalScale(12),
    borderRadius: horizontalScale(100),
  },
  messageIconView: {
    width: horizontalScale(10),
    height: verticalScale(10),
    backgroundColor: '#F35BAC',
    borderRadius: horizontalScale(10),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: horizontalScale(7),
    top: verticalScale(9),
  },
  messageIconText: {
    fontSize: scaleFontSize(7),
    fontFamily: 'Inter-regular',
    lineHeight: scaleFontSize(7),
    fontWeight: '600',
    color: '#fff',
  },
  userStoryContainer: {
    paddingHorizontal: horizontalScale(26),
    marginTop: verticalScale(12),
    height: 100,
  },
});

export default style;
