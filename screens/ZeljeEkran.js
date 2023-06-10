import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Boje from '../constants/Boje';
import ListaElement from '../components/ListaElemenata';
import { useSelector } from 'react-redux';
import { ZELJE } from '../data/testpodacizelje';

const ZeljeEkran = ({ route, navigation }) => {
  
  const prikazElelementa = (podaci) => {
    return (
      <ListaElement
        natpis={podaci.item.naslov}
      />
    );
  };

  return (
    <View style={stil.ekran}>
      <View style={stil.lista}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={ZELJE}
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
});

export default ZeljeEkran;