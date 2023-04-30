import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  Octicons,
} from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { btn1, colors, hr80, titles } from '../../global/style';

const SignupScreen = ({ navigation }) => {
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const [conPasswordFocus, setConPasswordFocus] = useState(false);

  return (
    <ScrollView>
      <SafeAreaView style={[styles.container]}>
        <Text style={styles.head1}>Sign Up</Text>

        {/* name start */}
        <View style={styles.inputout}>
          <AntDesign
            name="user"
            size={24}
            color={nameFocus === true ? colors.text1 : colors.text2}
          />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            onFocus={() => {
              setNameFocus(true);
              setEmailFocus(false);
              setPhoneFocus(false);
              setPasswordFocus(false);
              setShowPassword(false);
              setConPasswordFocus(false);
              setShowConPassword(false);
            }}
          />
        </View>
        {/* name end */}

        {/* email start */}
        <View style={styles.inputout}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color={emailFocus === true ? colors.text1 : colors.text2}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onFocus={() => {
              setNameFocus(false);
              setEmailFocus(true);
              setPhoneFocus(false);
              setPasswordFocus(false);
              setShowPassword(false);
              setConPasswordFocus(false);
              setShowConPassword(false);
            }}
          />
        </View>
        {/* email end */}

        {/* phone start */}
        <View style={styles.inputout}>
          <AntDesign
            name="phone"
            size={24}
            color={phoneFocus === true ? colors.text1 : colors.text2}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="numeric"
            maxLength={10}
            onFocus={() => {
              setNameFocus(false);
              setEmailFocus(false);
              setPhoneFocus(true);
              setPasswordFocus(false);
              setShowPassword(false);
              setConPasswordFocus(false);
              setShowConPassword(false);
            }}
          />
        </View>
        {/* phone end */}

        {/* password start */}
        <View style={styles.inputout}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={24}
            color={passwordFocus === true ? colors.text1 : colors.text2}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onFocus={() => {
              setNameFocus(false);
              setEmailFocus(false);
              setPhoneFocus(false);
              setPasswordFocus(true);
              setConPasswordFocus(false);
            }}
            secureTextEntry={showPassword === false ? true : false}
          />
          <Octicons
            name={showPassword === false ? 'eye-closed' : 'eye'}
            size={24}
            color={colors.text2}
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          />
        </View>
        {/* password end */}

        {/* confirm password start */}
        <View style={styles.inputout}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={24}
            color={conPasswordFocus === true ? colors.text1 : colors.text2}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onFocus={() => {
              setNameFocus(false);
              setEmailFocus(false);
              setPhoneFocus(false);
              setConPasswordFocus(true);
              setPasswordFocus(false);
            }}
            secureTextEntry={showConPassword === false ? true : false}
          />
          <Octicons
            name={showConPassword === false ? 'eye-closed' : 'eye'}
            size={24}
            color={colors.text2}
            onPress={() => {
              setShowConPassword(!showConPassword);
            }}
          />
        </View>
        {/* confirm password end */}

        {/* address start */}
        <Text style={styles.address}>Please enter your address</Text>
        <View style={styles.inputout}>
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            onFocus={() => {
              setNameFocus(false);
              setEmailFocus(false);
              setPhoneFocus(false);
              setPasswordFocus(false);
              setShowPassword(false);
              setConPasswordFocus(false);
              setShowConPassword(false);
            }}
          />
        </View>
        {/* address end */}

        <TouchableOpacity style={[btn1, { marginVertical: 10 }]}>
          <Text
            style={{
              color: colors.col1,
              fontSize: titles.btntxt,
              fontWeight: 'bold',
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>

        <Text style={styles.or}>OR</Text>
        <Text style={styles.gftxt}>Sign In With</Text>

        <View style={styles.gf}>
          <TouchableOpacity>
            <View style={styles.gficon}>
              <AntDesign name="google" size={24} color="#EA4335" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.gficon}>
              <FontAwesome5 name="facebook-f" size={24} color="#4267B2" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={hr80} />

        <Text style={{ fontSize: 16 }}>
          Already have an account?
          <Text
            style={styles.signup}
            onPress={() => navigation.navigate('Login')}
          >
            {' '}
            Sign In
          </Text>
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 70,
  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: 'center',
    marginVertical: 10,
  },
  inputout: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 20,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: '80%',
  },
  forgot: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 6,
    fontSize: 16,
  },
  or: {
    color: colors.text1,
    marginVertical: 6,
    fontWeight: 'bold',
    fontSize: 14,
  },
  gftxt: {
    color: colors.text2,
    marginVertical: 6,
    fontSize: 16,
  },
  gf: {
    flexDirection: 'row',
  },
  gficon: {
    backgroundColor: 'white',
    width: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e7e7e7',
    elevation: 16,
  },
  signup: {
    color: colors.text1,
  },
  address: {
    fontSize: 18,
    color: colors.text2,
    textAlign: 'center',
    marginTop: 20,
  },
});
