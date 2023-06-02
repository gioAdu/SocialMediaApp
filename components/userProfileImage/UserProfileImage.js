import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Image} from 'react-native';
import {horizontalScale} from '../../Zassets/styles/scaling';

const UserProfileImage = () => {
  return (
    <View style={style.userImgContainer}>
      <Image source={require('../../Zassets/images/default_profile.png')} />
    </View>
  );
};

const style = StyleSheet.create({
  userImgContainer: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: horizontalScale(3),
    borderRadius: horizontalScale(50),
  },
});

export default UserProfileImage;
