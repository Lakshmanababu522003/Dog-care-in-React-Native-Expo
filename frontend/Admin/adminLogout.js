import { View, Text, Alert,StyleSheet,Button } from 'react-native'
import React from 'react'

const Logout = ({ navigation }) => {
    const handleLogout = () => {
      Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => {
                // Perform logout logic here
                // For simplicity, let's assume logout is successful
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'admindashboard' }],
                });
              },
          },
          {
            text: 'Logout',
            onPress: () => {
              // Perform logout logic here
              // For simplicity, let's assume logout is successful
              navigation.reset({
                index: 0,
                routes: [{ name: 'Welcome' }],
              });
            },
          },
        ],
        { cancelable: false }
      );
    };
  return (
    handleLogout()
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default Logout