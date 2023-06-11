import  React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, RadioButton, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Boje from '../constants/Boje';
import Tipka from '../components/Tipke';
import { ZELJE } from '../data/testpodacizelje';
import Zelje from '../models/zelje';

const UnosZeljeEkran = ({route, navigation}) => {
  const [naslov, setNaslov] = useState('');
  const [pisac, setPisac] = useState('');



  const dodajNovi = () => {
     ZELJE.push(new Zelje(ZELJE.length, naslov, pisac))
     navigation.navigate('Zelje')
  };

  return (
    <View style={stil.ekran}>
      
      
      <Text>Naslov knjige:</Text>
      <View style={stil.inputView}>
        <TextInput
          value={naslov}
          onChangeText={text => setNaslov(text)}
        />
      </View>
      <Text>Pisac:</Text>
      <View style={stil.inputView}>
        <TextInput
          value={pisac}
          onChangeText={text => setPisac(text)}
        />
      </View>
      <Tipka
          title="Unesi"
          onPress={dodajNovi}
        />
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Pozadina
  },
   inputView: {
    backgroundColor: Boje.Naglasak1,
    borderRadius: 30,
    width: "70%",
    height: 30,
    marginBottom: 20,
    alignItems: "center",
  },
});

export default UnosZeljeEkran;