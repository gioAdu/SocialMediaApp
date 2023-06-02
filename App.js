import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  FlatList,
  Dimensions,
} from 'react-native';
import Title from './components/title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './Zassets/styles/main';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/userPosts/userPost';
const App = () => {
  const data = [
    {
      firstName: 'joseph',
      id: 1,
    },
    {
      firstName: 'Angel',
      id: 2,
    },
    {
      firstName: 'White',
      id: 3,
    },
    {
      firstName: 'Olivier',
      id: 4,
    },
    {
      firstName: 'john',
      id: 5,
    },
    {
      firstName: 'nick',
      id: 6,
    },
    {
      firstName: 'black',
      id: 7,
    },
    {
      firstName: 'Ann',
      id: 8,
    },
    {
      firstName: 'Mary',
      id: 9,
    },
  ];
  const pageSize = 4;
  const [pageNumber, setPageNumer] = useState(1);
  const [loading, setLoading] = useState(false);
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));

  const posts = [
    {
      firstName: 'Allison',
      lastName: 'becker',
      location: 'Sukabumi, Jawa Barat',
      likes: 1200,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Pondok leugnsir, Jawa Barat',
      likes: 1527,
      comments: 15,
      bookmarks: 25,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'spera',
      location: 'Boston, Massachusetts',
      likes: 125,
      comments: 6,
      bookmarks: 18,
      id: 3,
    },
    {
      firstName: 'john',
      lastName: 'doe',
      location: 'NY, US',
      likes: 1525,
      comments: 63,
      bookmarks: 73,
      id: 4,
    },
    {
      firstName: 'mary',
      lastName: 'Ann',
      location: 'Paris, France',
      likes: 244,
      comments: 23,
      bookmarks: 13,
      id: 5,
    },
  ];
  const postsPageSize = 2;
  const [pageNumberPosts, setpageNumberPosts] = useState(1);
  const [loadingPosts, setloadingPosts] = useState(false);
  const [renderedDataPosts, setrenderedDataPosts] = useState(
    posts.slice(0, postsPageSize),
  );

  const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  useEffect(() => {
    Dimensions.addEventListener(
      'change',
      result => {
        setScreenData(result.screen);
      },
      [],
    );
  });

  const pagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex > data.length) {
      return [];
    }

    if (startIndex > posts.length && posts === true) {
      return [];
    }
    if (!posts) {
      setPageNumer(pageNumber);
    } else {
      setpageNumberPosts(pageNumber);
    }
    return data.slice(startIndex, startIndex + pageSize);
  };
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={style.header}>
              <Title title={"Let's Explore"} />
              <Pressable style={style.messageIcon}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color={'#CACDDE'}
                  size={20}
                />
                <View style={style.messageIconView}>
                  <Text style={style.messageIconText}>2</Text>
                </View>
              </Pressable>
            </View>
            <View style={style.userStoryContainer}>
              <FlatList
                onMomentumScrollBegin={() => setLoading(false)}
                onEndReachedThreshold={0.5}
                keyExtractor={item => item.id.toString()}
                onEndReached={() => {
                  if (!loading) {
                    setLoading(true);
                    setRenderedData(prev => [
                      ...prev,
                      ...pagination(data, pageNumber + 1, pageSize),
                    ]);
                    setLoading(false);
                  }
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={renderedData}
                renderItem={({item}) => (
                  <UserStory firstName={item.firstName} />
                )}
              />
            </View>
          </>
        }
        onMomentumScrollBegin={() => setloadingPosts(false)}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id.toString() + ' post'}
        onEndReached={() => {
          if (!loadingPosts) {
            setloadingPosts(true);
            setrenderedDataPosts(prev => [
              ...prev,
              ...pagination(posts, pageNumberPosts + 1, postsPageSize, true),
            ]);
            setloadingPosts(false);
          }
        }}
        showsVerticalScrollIndicator={false}
        data={renderedDataPosts}
        renderItem={({item}) => (
          <View style={style.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              comments={item.comments}
              likes={item.likes}
              bookmarks={item.bookmarks}
              location={item.location}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
