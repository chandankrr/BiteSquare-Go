import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Categories from '../../components/Categories';
import HomeHeadNav from '../../components/HomeHeadNav';
import OfferSlider from '../../components/OfferSlider';
import { colors } from '../../global/style';

import firestore from '@react-native-firebase/firestore';
import CardSlider from '../../components/CardSlider';

const HomeScreen = () => {
  const [foodData, setFoodData] = useState([]);
  const [vegData, setVegData] = useState([]);
  const [nonVegData, setNonVegData] = useState([]);

  const foodRef = firestore().collection('foodData');

  useEffect(() => {
    foodRef.onSnapshot((snapshot) => {
      setFoodData(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    setVegData(foodData.filter((item) => item.foodType === 'veg'));
    setNonVegData(foodData.filter((item) => item.foodType === 'non-veg'));
  }, [foodData]);

  const [search, setSearch] = useState('');

  return (
    <>
      <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />
      <SafeAreaView style={[styles.container]}>
        <HomeHeadNav />
        <ScrollView>
          <View style={styles.searchbox}>
            <AntDesign
              name="search1"
              size={24}
              color="black"
              style={styles.searchicon}
            />
            <TextInput
              placeholder="search"
              style={styles.input}
              onChangeText={(text) => {
                setSearch(text);
              }}
            />
          </View>
          {search != '' && (
            <View style={styles.searchresultsouter}>
              <FlatList
                style={styles.searchresultsinner}
                data={foodData}
                renderItem={({ item }) => {
                  if (
                    item.foodName
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase())
                  ) {
                    return (
                      <View style={styles.searchresult}>
                        <AntDesign name="arrowright" size={24} color="black" />
                        <Text style={styles.searchresulttext}>
                          {item.foodName}
                        </Text>
                      </View>
                    );
                  }
                }}
              />
            </View>
          )}
          <Categories />
          <OfferSlider />
          <CardSlider title="Today's Special" data={foodData} />
          <CardSlider title="Non-Veg love" data={nonVegData} />
          <CardSlider title="Veg Hunger" data={vegData} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.col1,
    width: '100%',
  },
  searchbox: {
    flexDirection: 'row',
    width: '95%',
    backgroundColor: colors.col1,
    borderRadius: 30,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    elevation: 10,
  },
  input: {
    marginLeft: 10,
    width: '90%',
    fontSize: 18,
    color: colors.text1,
  },
  searchicon: {
    color: colors.text1,
  },
  searchresultsouter: {
    width: '100%',
    marginHorizontal: 30,
    height: '100%',
    backgroundColor: colors.col1,
  },
  searchresultsinner: {
    width: '100%',
  },
  searchresult: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  searchresulttext: {
    marginLeft: 10,
    fontSize: 18,
    color: colors.text1,
  },
});
