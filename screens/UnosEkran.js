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
    if(numericValue !== '' && parseInt(numericValue) > 2023){
      return;
    }
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
        <TextInput style={stil.input}
          value={naslov}
          onChangeText={text => setNaslov(text)}
        />
      </View>
      <Text>Pisac:</Text>
      <View style={stil.inputView}>
        <TextInput style={stil.input}
          value={pisac}
          onChangeText={text => setPisac(text)}
        />
      </View>
      <Text>Kategorija:</Text>
      <View style={stil.inputView}>
        <Picker style={stil.input}
          selectedValue={kategorija}
          onValueChange={(itemValue) => setKategorija(itemValue)}
        >
          <Picker.Item label="All" value="" />
          <Picker.Item label="Drama" value="drama" />
          <Picker.Item label="Ljubavna" value="ljubavna" />
          <Picker.Item label="Komedija" value="komedija" />
          <Picker.Item label="Kriminalistički" value="krimi" />
          <Picker.Item label="Misterija" value="misterija" />
          <Picker.Item label="Poezija" value="poezija" />
          <Picker.Item label="Fantazija" value="fantazija" />
          <Picker.Item label="Knjiga za mlade" value="mladi" />
          <Picker.Item label="Knjiga za djecu" value="djeca" />
        </Picker>
      </View>
      <Text>Godina čitanja:</Text>
      <View style={stil.inputView}>
        <TextInput style={stil.input}
          value={godina}
          keyboardType="numeric"
          onChangeText={handleGodinaChange}
        />
      </View>
      <Text>Ocjena knjige:</Text>
      <View style={stil.inputView}>
        <TextInput style={stil.input}
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
    height: 40,
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderColor: '#CCCCCC'
  },
});

export default UnosEkran;