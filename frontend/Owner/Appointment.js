import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, ImageBackground, ScrollView } from 'react-native';
import { Post_call } from '../Api/post.service'
import { Api } from '../Api/config'
import DateTimePicker from '@react-native-community/datetimepicker';

const Appointment = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [petName, setPetName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const AppointmentService = (name, phone, petName, appointmentDate) => {
    const Pass_Data = {
      apiUrl: Api + "appoint/add",
      requestBody: {
        username: name,
        phoneno: phone,
        dname: petName,
        appointdate: appointmentDate
      }
    }
    Post_call(Pass_Data).then((res) => {
      console.log(res)
      navigation.navigate('ownerdashboard')

      Alert.alert('Success', `Appointment details:\nName: ${name}\nPhone: ${phone}\nPet Name: ${petName}\nAppointment Date: ${appointmentDate}`);
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleAppointmentSubmit = () => {
    if (!name || !phone || !petName || !appointmentDate) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    AppointmentService(name, phone, petName, appointmentDate);

    setName('');
    setPhone('');
    setPetName('');
    setAppointmentDate(new Date());
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/drbg.png')}
        style={styles.background}
        imageStyle={{ opacity: 0.8 }}
      >
        <Image
          source={require('../assets/appoint.png')}
          style={styles.image}
        />
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={{ width: '80%', marginTop: 10, marginLeft: 35 }}>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Phone Number"
              value={phone}
              onChangeText={text => setPhone(text)}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Pet's Name"
              value={petName}
              onChangeText={text => setPetName(text)}
            />
            <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
              <Text>{appointmentDate.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={appointmentDate}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) {
                    setAppointmentDate(selectedDate);
                  }
                }}
              />
            )}
            <TouchableOpacity style={styles.button} onPress={handleAppointmentSubmit}>
              <Text style={styles.buttonText}>Submit Appointment</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
  },
  image: {
    width: 280,
    height: 280,
    marginBottom: 10,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginTop: 50
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1.5,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 50
  },
});

export default Appointment;
