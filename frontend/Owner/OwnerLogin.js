import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ImageBackground, TouchableOpacity, Text, Image } from 'react-native';
import{Post_call} from '../Api/post.service'
import{Api} from '../Api/config'
// // import { AsyncLocalStorage } from 'async_hooks';
// import { Storage } from 'expo-storage'

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const LoginService=(email,password)=>{
    const Pass_Data={
      apiUrl:Api+"users/login",
      requestBody:{
        email:email,
        password:password
      }
    }
    Post_call(Pass_Data).then(async(res)=>{
      console.log(res)
      // await Storage.setItem({
      //   key: `userData`,
      //   value: JSON.stringify(res)
      // })
    Alert.alert('Success', 'Login successful');

      navigation.navigate('ownerdashboard')
    }).catch((err)=>{
      console.log(err)
    Alert.alert('Error', 'wrong username or password');
      
    })
  }

  const handleLogin = () => {
    // Validate form fields
    if (!email || !password) {
      Alert.alert('Error', 'Both email and password are required');
      return;
    }

    LoginService(email,password);

    // Process login logic here (e.g., send data to server)

    // Reset form fields
    setEmail('');
    setPassword('');


    // navigation.navigate('ownerdashboard')
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/welcome.png')}
        style={styles.background}
        imageStyle={{ opacity: 0.5 }} 

      >
        <View style={styles.content}>
          <Image
            source={require('../assets/signupbg.png')}
            style={styles.image}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <CustomButton
            title="Login"
            onPress={handleLogin}
            buttonStyle={styles.loginButton}
            textStyle={styles.buttonText}
          />
        </View>
        <View style={{ marginTop: 10, marginLeft: 50 }}>
          <Text>Don't have an account? 
            <Text style={{ color: "#FB6B90", fontSize: 15,fontWeight:'bold' }} onPress={() => navigation.navigate('OwnerSignup')}> Signup</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  content: {
    width:'90%',
    paddingHorizontal: 0,
    borderRadius: 15,
    paddingVertical: 30,
    marginHorizontal: 20,
  },
  loginButton: {
    backgroundColor: '#355E3B',
  },
  input: {
    width: '100%',
    height: 50,
    marginVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 15,
  },
  image: {
    width: 280,
    height: 280,
    marginBottom: 10,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  button: {
    marginTop: 15,
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    width: "70%",
    borderWidth: 2,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  }
});

export default Login;
