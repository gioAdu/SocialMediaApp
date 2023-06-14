import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import globalStyle from '../../Zassets/styles/main';
import style from './style';
import {ProfileTabNav} from '../../navigation/MainNavigation';
const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require('../../Zassets/images/default_profile.png')}
            />
          </View>
        </View>
        <View style={style.userNameContainer}>
          <Text style={style.userName}>Emmanuel Roberston</Text>
        </View>
        <View style={style.profileStatsContainer}>
          <View style={[style.statContainer, style.statBorder]}>
            <Text style={style.statAmount}>45</Text>
            <Text style={style.statTitle}>Following</Text>
          </View>
          <View style={[style.statContainer, style.statBorder]}>
            <Text style={style.statAmount}>30</Text>
            <Text style={style.statTitle}>Followers</Text>
          </View>
          <View style={style.statContainer}>
            <Text style={style.statAmount}>100</Text>
            <Text style={style.statTitle}>Posts</Text>
          </View>
        </View>
        <View style={style.border}></View>
        <View style={{flex: 1, paddingBottom: 5}}>
          <ProfileTabNav />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
