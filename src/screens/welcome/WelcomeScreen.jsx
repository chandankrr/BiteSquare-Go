import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import logo from '../../../assets/welcomeImage.png';
import { colors, hr80 } from '../../global/style';

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor="#ff4242" barStyle="dark-content" />
      <SafeAreaView style={[styles.container]}>
        <Text style={styles.title}>Welcome to BiteSquare Go</Text>
        <View style={styles.logoout}>
          <Image source={logo} style={styles.logo}></Image>
        </View>
        <View style={hr80} />
        <Text style={styles.text}>
          Find the best food around you at lowest price.
        </Text>
        <View style={hr80} />

        <View style={styles.btnout}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.btn}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff4242',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: colors.col1,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '200',
  },
  logoout: {
    width: '80%',
    height: '30%',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    width: '80%',
    color: colors.col1,
    textAlign: 'center',
  },
  btnout: {
    flexDirection: 'row',
  },
  btn: {
    fontSize: 20,
    color: colors.text1,
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: '700',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
});
