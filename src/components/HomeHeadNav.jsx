import {
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../src/global/style';

const HomeHeadNav = () => {
  return (
    <View style={styles.container}>
      <Fontisto
        name="nav-icon-list-a"
        size={20}
        color="black"
        style={styles.myicon}
      />
      <View style={styles.containerin}>
        <Text style={styles.mytext}>BiteSquare Go </Text>
        <MaterialCommunityIcons
          name="food-outline"
          size={32}
          color="black"
          style={styles.myicon}
        />
      </View>
      <FontAwesome5
        name="user-circle"
        size={26}
        color="black"
        style={styles.myicon}
      />
    </View>
  );
};

export default HomeHeadNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.col1,
    elevation: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  containerin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myicon: {
    color: colors.text1,
  },
  mytext: {
    color: colors.text1,
    fontSize: 24,
  },
});
