import React from 'react';
import { View, Text, StyleSheet, Button, Image, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import Tipka from '../components/Tipke'
import Boje from '../constants/Boje'

const PocetniEkran = ({ navigation }) => {
  return (
    
    <SafeAreaView style={stil.container}>
      <ImageBackground
          style={stil.centerContentStyle}  
          source={require('../assets/Knjige.jpg')} >
        <ScrollView vertical={true} style={stil.ekran}>
          
              <View style={stil.kontrole}>
                <Tipka                 
                  title="Pročitane knjige"
                  onPress={() => navigation.navigate('Popis')}
                />
                <Tipka
                  title="Unesi pročitanu knjigu"
                  onPress={() => navigation.navigate('Unos')}
                />
                <Tipka
                  title="Knjige koje želim čitati"
                  onPress={() => navigation.navigate('Zelje')}
                />
                
              </View>
            
        
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
   
  );
};

const stil = StyleSheet.create({
   ekran: {    
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  container: {
    flex: 1,
    padding: 5
  },
  
 kontrole:{
    flex: 1,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-around",
    height: 250
  },
  centerContentStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover'
  },
});

export default PocetniEkran;