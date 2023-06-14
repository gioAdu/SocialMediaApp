import React from 'react';
import {View, ScrollView, Image, Text} from 'react-native';
import style from './style';

const ProfileTabPost = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.ProfileTabPostContainer}>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../Zassets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../Zassets/images/default_post.png')}
        />
      </View>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../Zassets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../Zassets/images/default_post.png')}
        />
      </View>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../Zassets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../Zassets/images/default_post.png')}
        />
      </View>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../Zassets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../Zassets/images/default_post.png')}
        />
      </View>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../Zassets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../Zassets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabPost;
