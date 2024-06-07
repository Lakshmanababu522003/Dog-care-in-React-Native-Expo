import React from 'react';
import { StyleSheet, View, Text, ScrollView,ImageBackground } from 'react-native';

const NutritionTips = () => {
  const tips = [
    { tip: 'Provide a balanced diet with high-quality protein sources.', description: `Make sure your dog's food includes meat, fish, eggs, or other protein sources to support muscle growth and overall health.` },
    { tip: 'Limit treats and snacks.', description: `While treats are fun, they should only make up a small part of your dog's diet to prevent weight gain and nutritional imbalances.` },
    { tip: 'Avoid feeding human foods that are toxic to dogs.', description: `Certain foods like chocolate, grapes, onions, and garlic can be toxic to dogs and should be avoided.` },
    { tip: 'Consult with your veterinarian for dietary recommendations.', description: `Every dog is different, so it's best to consult with your vet to determine the best diet for your individual pet.` },
    // Add more tips as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
         <ImageBackground
        source={require('../assets/drbg.png')}
        style={styles.background}
        imageStyle={{ opacity: 0.8 }}
      >
      {tips.map((tip, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{tip.tip}</Text>
          <Text style={styles.description}>{tip.description}</Text>
        </View>
      ))}
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '85%',
    elevation: 3,
    marginLeft:25,
    marginTop:10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#355E3B'
  },
  description: {
    fontSize: 16,
    color:'#088F8F'

  },
  background: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
  }
});

export default NutritionTips;
