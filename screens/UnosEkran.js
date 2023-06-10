import  React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, RadioButton, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Boje from '../constants/Boje';
import Tipka from '../components/Tipke';
import { BOOKS } from '../data/testpodaci';
import Book from '../models/book';

const UnosEkran = ({route, navigation}) => {
  const [naslov, setNaslov] = useState('');
  const [pisac, setPisac] = useState('');
  const [kategorija, setKategorija] = useState('');
  const [godina, setGodina] = useState('');
  const [ocjena, setOcjena] = useState('');


  const dodajNovi = () => {
     BOOKS.push(new Book(BOOKS.length, naslov, pisac, kategorija, godina, ocjena))
     navigation.navigate('Popis')
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
      <Text>Kategorija:</Text>
      <View style={stil.inputView}>
        <TextInput
          value={kategorija}
          onChangeText={text => setKategorija(text)}
        />
      </View>
      <Text>Godina čitanja:</Text>
      <View style={stil.inputView}>
        <TextInput
          value={godina}
          onChangeText={text => setGodina(text)}
        />
      </View>
      <Text>Ocjena knjige:</Text>
      <View style={stil.inputView}>
        <TextInput
          value={ocjena}
          onChangeText={text => setOcjena(text)}
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

export default UnosEkran;