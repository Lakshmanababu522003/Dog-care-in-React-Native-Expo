import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ImageBackground, ScrollView } from 'react-native';

const DoctorList = ({navigation}) => {
  const doctors = [
    {
      name: 'Dr. John Doe',
      phone: '123-456-7890',
      hospital: 'PetCare Hospital',
      specialty: 'Veterinary Medicine',
      address: '123 Main St, City, Country',
    },
    {
      name: 'Dr. Jane Smith',
      phone: '987-654-3210',
      hospital: 'Animal Clinic',
      specialty: 'Pet Surgery',
      address: '456 Elm St, City, Country',
    },
    {
      name: 'Dr. Jane Smith',
      phone: '987-654-3210',
      hospital: 'Animal Clinic',
      specialty: 'Pet Surgery',
      address: '456 Elm St, City, Country',
    }
    // Add more doctor objects as needed
  ];

  const handleBookAppointment = (doctorName) => {
    // Handle booking appointment action here
    // Alert.alert('Success', `Booking appointment with ${doctorName}`);
    navigation.navigate('appointment')
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
      <ImageBackground
        source={require('../assets/drbg.png')}
        style={styles.background}
        imageStyle={{ opacity: 0.8 }}
      >
        {doctors.map((doctor, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{doctor.name}</Text>
            <Text style={styles.detail}>Phone: {doctor.phone}</Text>
            <Text style={styles.detail}>Hospital: {doctor.hospital}</Text>
            <Text style={styles.detail}>Specialty: {doctor.specialty}</Text>
            <Text style={styles.detail}>Address: {doctor.address}</Text>
            <TouchableOpacity onPress={() => handleBookAppointment(doctor.name)} style={styles.button}>
              <Text style={styles.buttonText}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '85%',
    elevation: 3,
    marginLeft: 28,
    marginTop: 30
  },
  background: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DoctorList;
