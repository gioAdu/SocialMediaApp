import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import UserProfileImage from '../userProfileImage/UserProfileImage';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../Zassets/styles/scaling';
const UserPost = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.userInfoContainer}>
        <View style={style.userInfo}>
          <UserProfileImage />
          <View>
            <Text style={style.name}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <Pressable>
          <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'} size={24} />
        </Pressable>
      </View>
      <View style={style.post}>
        <Image
          style={style.postImg}
          resizeMode={'cover'}
          source={require('../../Zassets/images/default_post.png')}
        />
      </View>
      <View style={style.buttonsContainer}>
        <Pressable style={style.userButton}>
          <FontAwesomeIcon icon={faHeart} style={style.userBtnIcon} />
          <Text style={style.userBtnText}>{props.likes}</Text>
        </Pressable>
        <Pressable style={style.userButton}>
          <FontAwesomeIcon icon={faComment} style={style.userBtnIcon} />
          <Text style={style.userBtnText}>{props.comments}</Text>
        </Pressable>
        <Pressable style={style.userButton}>
          <FontAwesomeIcon icon={faBookmark} style={style.userBtnIcon} />
          <Text style={style.userBtnText}>{props.bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};

UserPost.proptTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  location: PropTypes.string,
};

const style = StyleSheet.create({
  name: {
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
  location: {
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    paddingTop: verticalScale(5),
    color: '#79869F',
  },
  userPostContainer: {
    marginTop: verticalScale(20),
    paddingHorizontal: horizontalScale(22),
    borderBottomWidth: 1,
    paddingBottom: verticalScale(20),
    borderBottomColor: '#EFF2F6',
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(10),
  },
  userInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(16),
  },
  post: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: verticalScale(16),
  },
  postImg: {
    width: '100%',
    borderRadius: horizontalScale(6),
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: horizontalScale(10),
    alignItems: 'center',
  },
  userButton: {
    flexDirection: 'row',
    marginRight: horizontalScale(27),
    alignItems: 'center',
  },
  userBtnIcon: {
    marginRight: horizontalScale(4),
    color: '#79869F',
  },
  userBtnText: {
    color: '#79869F',
  },
});

export default UserPost;
