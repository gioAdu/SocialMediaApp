import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../Zassets/styles/scaling';

const style = StyleSheet.create({
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    marginTop: verticalScale(20),
    padding: horizontalScale(4),
    borderRadius: horizontalScale(100),
  },
  profileImage: {
    width: horizontalScale(120),
    height: horizontalScale(120),
  },
  userNameContainer: {
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  userName: {
    fontFamily: 'Inter-Regular',
    fontWeight: '600',
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    color: '#022150',
  },
  profileStatsContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(16),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  statContainer: {
    paddingHorizontal: horizontalScale(18),
    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
  statTitle: {
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    lineHeight: scaleFontSize(19),
    fontSize: scaleFontSize(16),
    color: '#79869f',
  },
  statAmount: {
    fontFamily: 'Inter-Regular',
    fontWeight: '600',
    lineHeight: scaleFontSize(24),
    fontSize: scaleFontSize(20),
    color: '#022150',
    marginBottom: verticalScale(5),
  },
  border: {
    borderTopWidth: 1,
    borderColor: '#EFF2F6',
    marginVertical: verticalScale(16),
    marginHorizontal: horizontalScale(28),
  },
});

export default style;
