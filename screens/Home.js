import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  Card,
  Title,
  Button,
  Paragraph,
  Avatar,
  ActivityIndicator,
  Colors,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AirbnbRating, Rating} from 'react-native-ratings';
import {zomatoCategories} from '../actions/zomatoAction';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const {height, width} = Dimensions.get('window');

const Home = () => {
  const dispatch = useDispatch();

  const getCategories = useSelector((state) => state.getCategories);
  const {loading, categories, error} = getCategories;
  const getSearch = useSelector((state) => state.getSearch);
  const {loading: loadding, searching, error: errorr} = getSearch;
  console.log('heelllo', categories.categories);
  console.log('k', searching?.restaurants);
  useEffect(() => {
    dispatch(zomatoCategories());
  }, []);
  // useEffect(()=>{

  //   console.log('arsalan', searching.restaurants)

  //       },[searching])
  return (
    <View style={styles.categ}>
      {/* {!loading?<FlatList data={categories.categroies} renderItem={({category})=>(
<Text>{category.categories.name}</Text>,
console.log('hi',category?.categories?.name)
          )}/>:null} */}

      <View style={{height: 30, marginVertical: 10}}>
        {loading ? (
          <ActivityIndicator
            animating={true}
            color={Colors.grey700}
            size="large"
          />
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.categories && !loading
              ? categories.categories.map((cat) => (
                  <Text style={styles.text}>{cat.categories.name}</Text>
                ))
              : null}
          </ScrollView>
        )}
      </View>
      <View>
        {/* {searching.restaurants && !loadding ? (
          searching?.restaurants.map((res) => {
            return (
              (
                <Text style={{padding: 20, marginTop: 50}}>
                  hhhh
                  {('hello', res.restaurant.name)}
                </Text>
              ),
              console.log('uu', res)
            );
          })
        ) : (
          <Text>searching</Text>
        )} */}
        {loadding ? (
          <ActivityIndicator
            animating={true}
            color={Colors.grey700}
            size="large"
          />
        ) : (
          <ScrollView
            style={{marginBottom: 150}}
            showsVerticalScrollIndicator={false}>
            {searching && searching.restaurants && !loading
              ? searching?.restaurants.map((res) => (
                  <Card>
                    <Card.Cover source={{uri: res.restaurant.featured_image}} />
                    {console.log(res.restaurant.user_rating.aggregate_rating)}
                    <Card.Content>
                      <Title>{res.restaurant.name}</Title>
                      <View
                        style={{
                          marginTop: -5,
                          alignItems: 'flex-start',
                        }}>
                        <AirbnbRating
                          showRating={false}
                          count={5}
                          size={20}
                          ratingCount={
                            res.restaurant.user_rating.aggregate_rating
                          }
                        />
                      </View>
                      <Paragraph>{res.restaurant.cuisines}</Paragraph>

                      {/* <Paragraph> <Icon name={res.restaurant.user_rating.aggregate_rating>=1 ?'star':res.restaurant.user_rating.aggregate_rating>=0.5?} /> </Paragraph> */}
                    </Card.Content>
                  </Card>
                ))
              : null}
          </ScrollView>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  categ: {},
  text: {
    marginLeft: 7,
    padding: 6,
    backgroundColor: '#F50505',
    borderRadius: 7,
    color: '#fff',
  },
});

export default Home;
