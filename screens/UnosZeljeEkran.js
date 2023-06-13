import  {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Boje from '../constants/Boje';
import Tipka from '../components/Tipke';
import { ZELJE } from '../data/testpodacizelje';
import Zelje from '../models/zelje';

const UnosZeljeEkran = ({navigation}) => {
  const [naslov, setNaslov] = useState('');
  const [pisac, setPisac] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (naslov !== "" && pisac !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [naslov, pisac])

  const dodajNovi = () => {
    if (disabled) return;
     ZELJE.push(new Zelje(ZELJE.length, naslov, pisac))
     navigation.navigate('Zelje')
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
  },
});

export default UnosZeljeEkran;