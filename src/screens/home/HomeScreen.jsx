import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Categories from '../../components/Categories';
import HomeHeadNav from '../../components/HomeHeadNav';
import OfferSlider from '../../components/OfferSlider';
import { colors } from '../../global/style';

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={[styles.container, { marginTop: StatusBar.currentHeight }]}
    >
      <HomeHeadNav />
      <View style={styles.searchbox}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={styles.searchicon}
        />
        <TextInput placeholder="search" style={styles.input} />
      </View>
      <Categories />
      <OfferSlider />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.col1,
    alignItems: 'center',
    width: '100%',
  },
  searchbox: {
    flexDirection: 'row',
    width: '95%',
    backgroundColor: colors.col1,
    borderRadius: 30,
    alignItems: 'center',
    padding: 10,
    margin: 20,
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
});
