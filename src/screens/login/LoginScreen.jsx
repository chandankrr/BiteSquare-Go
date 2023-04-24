import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  Octicons,
} from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { btn1, colors, hr80, titles } from '../../global/style';

const LoginScreen = ({ navigation }) => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle={'default'} />
        <Text style={styles.head1}>Sign In</Text>
        <View style={styles.inputout}>
          <AntDesign
            name="user"
            size={24}
            color={emailfocus === true ? colors.text1 : colors.text2}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onFocus={() => {
              setEmailfocus(true);
              setPasswordfocus(false);
              setShowpassword(false);
            }}
          />
        </View>
        <View style={styles.inputout}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={24}
            color={passwordfocus === true ? colors.text1 : colors.text2}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onFocus={() => {
              setEmailfocus(false);
              setPasswordfocus(true);
            }}
            secureTextEntry={showpassword === false ? true : false}
          />
          <Octicons
            name={showpassword === false ? 'eye-closed' : 'eye'}
            size={24}
            color={colors.text2}
            onPress={() => {
              setShowpassword(!showpassword);
            }}
          />
        </View>
        <TouchableOpacity
          style={[btn1, { marginVertical: 10 }]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text
            style={{
              color: colors.col1,
              fontSize: titles.btntxt,
              fontWeight: 'bold',
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>

        <Text style={styles.forgot}>Forgot Password</Text>
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
          Don't have an account?
          <Text
            style={styles.signup}
            onPress={() => navigation.navigate('Signup')}
          >
            {' '}
            Sign Up
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

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
});
