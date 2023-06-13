import {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {Picker} from '@react-native-community/picker';
import Boje from '../constants/Boje';
import Tipka from '../components/Tipke';
import { BOOKS } from '../data/testpodaci';
import Book from '../models/book';

const UnosEkran = ({navigation}) => {
  const [naslov, setNaslov] = useState('');
  const [pisac, setPisac] = useState('');
  const [kategorija, setKategorija] = useState('');
  const [godina, setGodina] = useState('');
  const [ocjena, setOcjena] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (naslov !== "" && pisac !== "" && kategorija !== "" && godina !== "" && ocjena !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [naslov, pisac, kategorija, godina, ocjena])

  const dodajNovi = () => {
    if (disabled) return;
     BOOKS.push(new Book(BOOKS.length, naslov, pisac, kategorija, godina, ocjena, false))
     navigation.navigate('Popis')
  };

  handleGodinaChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setGodina(numericValue);
  };

  handleOcjenaChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    if (numericValue !== '' && (parseInt(numericValue) > 10 || parseInt(numericValue) < 1)) {
      return;
    }

    setOcjena(numericValue);
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
        <Picker
          selectedValue={kategorija}
          onValueChange={(itemValue) => setKategorija(itemValue)}
        >
          <Picker.Item label="" value="" />
          <Picker.Item label="Horor" value="horor" />
          <Picker.Item label="Romantični" value="romance" />
          <Picker.Item label="Triler" value="triller" />
        </Picker>
      </View>
      <Text>Godina čitanja:</Text>
      <View style={stil.inputView}>
        <TextInput
          value={godina}
          keyboardType="numeric"
          onChangeText={handleGodinaChange}
        />
      </View>
      <Text>Ocjena knjige:</Text>
      <View style={stil.inputView}>
        <TextInput
          value={ocjena}
          onChangeText={handleOcjenaChange}
        />
      </View>
      <Tipka
          title="Unesi"
          onPress={dodajNovi}
          disabled={disabled}
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