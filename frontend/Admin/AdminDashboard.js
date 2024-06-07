import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ImageBackground } from 'react-native';


const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );

const AdminDashboard = ({navigation}) => {
  // Dummy data for counts
  const doctorCount = 3;
  // const appointmentCount = 2;
  const notificationCount = 5;

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
    <View style={styles.container}>
         <ImageBackground
        source={require('../assets/dashbg.png')}
        style={styles.background}
        imageStyle={{ opacity: 0.2 }} 

      >
        <View style={{marginTop:100}}>
      <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('doctor')}>
        <Text style={styles.title}>Doctor Count</Text>
        <Text style={styles.count}>{doctorCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('adetails')}>
        <Text style={styles.title}>Appointment Count</Text>
        <Text style={styles.count}>{appointment.length}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.title}>Notification Count</Text>
        <Text style={styles.count}>{notificationCount}</Text>
      </TouchableOpacity>
      <CustomButton
        title="Logout"
        onPress={()=>navigation.navigate('alogout')}
        buttonStyle={styles.signInButton}
        textStyle={styles.buttonText}
      />
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 20,
  },
  button: {
    marginTop:0,
    marginLeft:45,
  alignItems: 'center',
  padding: 10,
  borderRadius: 90,
  width:"80%"
},
buttonText: {
  fontSize: 16,
  color: '#000',
},

signInButton: {
    marginTop:40,
  backgroundColor: '#d6a56b',
},
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    width: '80%',
    marginTop:20,
    marginLeft:40
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#d6a56b'
  },
  count: {
    fontSize: 24,
  },
  background: {
    // flex: 1,
    resizeMode: "cover",
    height:'100%'

    // justifyContent: "center",
  }
});

export default AdminDashboard;
