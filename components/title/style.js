import {StyleSheet} from 'react-native';
import { scaleFontSize } from '../../Zassets/styles/scaling';

const style = StyleSheet.create({
  title: {
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
  },
});

export default style;
