import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity,ImageBackground } from 'react-native';

const data = [
  { type: 'breed', name: 'Labrador', image: require('../assets/labrador.png') },
  { type: 'breed', name: 'Golden Retriever', image: require('../assets/gr.png') },
  { type: 'breed', name: 'German Shepherd', image: require('../assets/gs.png') },
  { type: 'food', name: 'Kibble', image: require('../assets/labrador.png') },
  { type: 'food', name: 'Canned', image: require('../assets/labrador.png') },
  { type: 'food', name: 'Raw', image: require('../assets/labrador.png') },
  { type: 'tip',image: require('../assets/labrador.png'), name: 'Regular Exercise', description: 'Make sure your dog gets enough exercise to stay healthy and happy.' },
  { type: 'tip',image: require('../assets/labrador.png'), name: 'Healthy Diet', description: 'Provide your dog with balanced and nutritious meals.' },
  { type: 'tip',image: require('../assets/labrador.png'), name: 'Regular Vet Visits', description: 'Take your dog to the vet for regular check-ups and vaccinations.' },
];

const Home = ({ navigation }) => {
  const renderContent = (sectionTitle, items) => {
    return (
      <View style={styles.section}>
        
        <Text style={styles.sectionTitle}>{sectionTitle}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <TouchableOpacity key={index} >
              <View style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                {item.description && <Text style={styles.description}>{item.description}</Text>}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

      </View>
    );
  };

  // Filter data for each section
  const breedData = data.filter(item => item.type === 'breed');
  const foodData = data.filter(item => item.type === 'food');
  const tipData = data.filter(item => item.type === 'tip');

  return (
    <ScrollView style={styles.container}>
         <ImageBackground
        source={require('../assets/dashbg.png')}
        style={styles.background}
        imageStyle={{ opacity: 0.2 }} 

      >
      {renderContent('Dog Breeds', breedData)}
      {renderContent('Dog Foods', foodData)}
      {renderContent('Health Tips', tipData)}
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 20,
  },
  section: {
    marginBottom: 20,
    // color:'#088F8F'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10,
    color:'#355E3B',

  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  tipcard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color:'#088F8F'
  },
  description: {
    fontSize: 14,
    justifyContent:'flex-start',
    width:180,
    color:'grey'
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
  }
});

export default Home;
