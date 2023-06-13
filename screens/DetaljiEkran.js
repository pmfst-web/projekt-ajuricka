import React from 'react';
import {useSelector} from 'react-redux'
import { View, Text, StyleSheet, Button } from 'react-native';
import Boje from '../constants/Boje';

const DetaljiEkran = ({ route, navigation }) => {
  const idOKnjige = Number(route.params.id);
  const sviRadovi = useSelector(state => state.radovi.radovi)
  const rad = sviRadovi.find((r) => r.id === idKnjige);

  return (
    <View style={stil.ekran}>
      <View style={stil.tablica}>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Ime pisca</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={{...stil.bold}}>{rad.pisac}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Naslov knjige</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.ime}>{rad.naslov}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Žanr:</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{rad.kategorija}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Godina kad je pročitana:</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{rad.godina}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Ocjena</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{rad.ocjena}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Pozadina,
  },
  tablica: {
    width: '85%',
    flex: 1,
  },
  redak: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 35,
    paddingVertical: 0,
    marginVertical: 15,
  },
  stupac: {
    alignItems: 'center',
    marginVertical: 5,
    
  },
  ime:{
    fontFamily: "Corinthia",
    fontSize: 20,
    alignItems: 'center',
  },
  bold:{
    fontWeight: "bold",
  }
});

export default DetaljiEkran;