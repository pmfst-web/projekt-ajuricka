import React from 'react';
import { View, Text, StyleSheet, Button, Image, SafeAreaView, ImageBackground } from 'react-native';
import Tipka from '../components/Tipke'
import Boje from '../constants/Boje'

const PocetniEkran = ({ navigation }) => {
  return (
    <SafeAreaView style={stil.container}>

      <ImageBackground
        style={{ flex: 1 }}  
        source={require('../assets/Knjige.jpg')} >
          <View style={stil.container}>
            <Tipka
              style={stil.titleStyle}
              title="Popis radova"
              onPress={() => navigation.navigate('Popis')}
            />
            <Tipka
              style={stil.titleStyle} 
              title="Unos radova"
              onPress={() => navigation.navigate('Unos')}
            />
            <View style={stil.centerContentStyle}>
              <Image  source={require('../assets/Knjige.jpg')}  />
            </View>
          </View>
        
      </ImageBackground>
    </SafeAreaView>
  );
};

const stil = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  centerContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PocetniEkran;