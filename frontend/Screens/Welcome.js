import { ImageBackground, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const Welcome = ({navigation}) => {

  const handleSignUp = () => {
    // Handle sign up logic
    // Alert.alert('you are moved to signup page');
    console.log('Sign up button pressed');
    navigation.navigate('Ownerlogin')
  };

  const handleSignIn = () => {
    // Handle sign in logic
    console.log('Sign in button pressed');
    navigation.navigate('alogin')

  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.background} 
        source={require('../assets/welcome.png')} 
        imageStyle={{ opacity: 0.5 }} 
      >
        <Image style={styles.image} source={require('../assets/bg.png')} />
        <View style={{width:200,height:100,alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>Dog Care</Text>
            <Image style={{width:80,height:40,marginTop:-75,marginLeft:180,transform:[{rotate: '44deg'}]}} source={require('../assets/wellogo.png')} />
        </View>
        <View style={styles.card}>
        <CustomButton
        title="Owner"
        onPress={handleSignUp}
        buttonStyle={styles.signUpButton}
        textStyle={styles.buttonText}
      />
      <CustomButton
        title="Admin"
        onPress={handleSignIn}
        buttonStyle={styles.signInButton}
        textStyle={styles.buttonText}
      />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"100%"
  },
  background: {
    flex: 1, 
    resizeMode: 'cover', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  image:{
    width:280,
    height:250,
    marginTop:-50
  },
  text:{
    marginTop:20,
    fontSize:30,
    padding:10,
    textAlign:'center',
    fontWeight:'bold',
    color:'#355E3B'
    
  },
  card:{
    textAlign:'center',
    width:'100%',
    // backgroundColor:'#fff',
  },
  button: {
    marginTop:80,
    marginLeft:15,
  alignItems: 'center',
  padding: 10,
  borderRadius: 90,
  width:"90%"
},
buttonText: {
  fontSize: 16,
  color: '#000',
},
signUpButton: {
  backgroundColor: '#088F8F',
},
signInButton: {
    marginTop:40,
  backgroundColor: 'violet',
},
});
