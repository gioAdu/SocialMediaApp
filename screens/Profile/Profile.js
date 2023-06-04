import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import globalStyle from '../../Zassets/styles/main';
const Profile = () => {
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View>
        <Text>Profile works</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
