import React from 'react';
import { View, Text, StyleSheet, Button, Image, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import Tipka from '../components/Tipke'
import Boje from '../constants/Boje'

const PocetniEkran = ({ navigation }) => {
  return (
    
    <SafeAreaView style={stil.container}>
      <ScrollView vertical={true} style={{flex: 1}}>
        <ImageBackground
          style={stil.centerContentStyle}  
          source={require('../assets/Knjige.jpg')} >
            <View style={stil.container}>
              <Tipka
                style={stil.titleStyle}
                title="Pročitane knjige"
                onPress={() => navigation.navigate('Popis')}
              />
              <Tipka
                style={stil.titleStyle} 
                title="Unesi pročitanu knjigu"
                onPress={() => navigation.navigate('Unos')}
              />
              <Tipka
                style={stil.titleStyle} 
                title="Knjige koje želim čitati"
                onPress={() => navigation.navigate('Zelje')}
              />
              
            </View>
          
        </ImageBackground>
       </ScrollView>
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
    padding: 25,
    justifyContent: "space-around"
  },
  centerContentStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PocetniEkran;