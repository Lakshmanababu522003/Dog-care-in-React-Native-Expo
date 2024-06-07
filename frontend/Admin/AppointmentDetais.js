import React ,{useState,useEffect}from 'react';
import { StyleSheet, Text, View, ScrollView,ImageBackground } from 'react-native';

const AppointmentDetails = () => {
  // Static appointment details
  // const appointments = [
  //   {
  //     name: 'John Doe',
  //     phone: '123-456-7890',
  //     petName: 'Buddy',
  //     appointmentDate: '2024-02-14',
  //     appointmentTime: '10:00 AM',
  //   },
  //   {
  //     name: 'Jane Smith',
  //     phone: '987-654-3210',
  //     petName: 'Max',
  //     appointmentDate: '2024-02-15',
  //     appointmentTime: '11:30 AM',
  //   },
  //   // Add more appointment objects as needed
  // ];

  const [appointment, setAppointment] = useState([]);


  useEffect(() => {
    fetchCandidates();
  }, [appointment]);

  const fetchCandidates = async () => {
    try {
      const response = await fetch('http://192.168.43.248:4000/appoint/read');
      const data = await response.json();
      setAppointment(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground
        source={require('../assets/drbg.png')}
        style={styles.background}
        imageStyle={{ opacity: 0.8 }}
      >
      {appointment.map((appointment, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>Name:</Text>
          <Text style={styles.detail}>{appointment.username}</Text>

          <Text style={styles.title}>Phone:</Text>
          <Text style={styles.detail}>{appointment.phoneno}</Text>

          <Text style={styles.title}>Pet Name:</Text>
          <Text style={styles.detail}>{appointment.dname}</Text>

          <Text style={styles.title}>Appointment Date:</Text>
          {/* <Text style={styles.detail}>{appointment.appointdate}</Text> */}
          <Text style={styles.detail}>{new Date(appointment.appointdate).toLocaleDateString()}</Text>


        </View>
      ))}
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    // paddingHorizontal: 20,
    marginTop:20
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    width:'100%'
    // justifyContent: "center",
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    width:'85%',
    marginTop:20,
    marginLeft:28
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detail: {
    fontSize: 16,
  },
});

export default AppointmentDetails;
