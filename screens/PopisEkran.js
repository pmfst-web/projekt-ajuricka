import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Boje from '../constants/Boje';
import ListaElement from '../components/ListaElemenata';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import {filterKategorije, filterGodine, filterOcjene} from '../store/actions/radovi'

const PopisEkran = ({ navigation }) => {
  const dispatch = useDispatch();
  const radoviPrikaz = useSelector((state) => state.radovi.filterRadovi);
  const [radovi, setRadovi] = useState(radoviPrikaz);
  const [kategorija, setKategorija] = useState('');
  const [godina, setGodina] = useState('');
  const [ocjena, setOcjena] = useState('');
  
  useEffect(() => {
    setRadovi(radoviPrikaz);
  }, [radoviPrikaz])

  const onKategorijaChange = (itemValue) => {
    setKategorija(itemValue);
    setGodina("");
    setOcjena("");
    dispatch(filterKategorije(itemValue));
  }

  handleGodinaChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setGodina(numericValue);
    setKategorija("");
    setOcjena("");
    dispatch(filterGodine(text));
  };

  handleOcjenaChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setOcjena(numericValue);
    setGodina("");
    setKategorija("");
    dispatch(filterOcjene(text));
  };

  const prikazElelementa = (podaci) => {
    return (
      <ListaElement
        onPress={() => navigation.navigate('Detalji', { id: podaci.item.id })}
        id={podaci.item.id}
        naslov={podaci.item.naslov}
        favorit={podaci.item.favorit}
      />
    );
  };

  return (
    <View style={stil.ekran}>
      <View style={stil.lista}>
        
          <Text>Kategorija: </Text>
            <Picker style={stil.filterK}
              selectedValue={kategorija}
              onValueChange={(itemValue) => onKategorijaChange(itemValue)} >
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
          <Text>Godina: </Text>
          <View style={stil.filterB}>
            <TextInput
              value={godina}
              keyboardType="numeric"
              onChangeText={handleGodinaChange}
            />
          </View>
          <Text>Ocjena: </Text>
          <View style={stil.filterB}>
            <TextInput
              value={ocjena}
              keyboardType="numeric"
              onChangeText={handleOcjenaChange}
            />
          </View>
        
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ margin: 5 }}
            data={radovi}
            renderItem={prikazElelementa}
            numColumns={1}
          />
        </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Pozadina,
  },
  lista: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  filterK: {
    alignItems: 'center',
    padding: 5,
    fontSize: 16,
    borderColor: '#CCCCCC'
  },
  filterB: {
    padding: 5,
    fontSize: 16,
    borderColor: '#CCCCCC',
    backgroundColor: "white"
  }
});

export default PopisEkran;