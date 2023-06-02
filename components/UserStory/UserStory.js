import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import UserProfileImage from '../userProfileImage/UserProfileImage';
import {horizontalScale, scaleFontSize, verticalScale} from '../../Zassets/styles/scaling';
const UserStory = props => {
  return (
    <View style={styles.storyContainer}>
      <UserProfileImage />
      <Text style={styles.name}>{props.firstName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(18),
  },
  name: {
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    marginTop: verticalScale(8),
  },
});

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default UserStory;
