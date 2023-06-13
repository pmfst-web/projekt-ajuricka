import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Boje from '../constants/Boje'

const Tipka = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
      <View style={{...stil.tipka, ...props.style}}>
        <Text style={stil.naslov}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tipka: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Naglasak1,
    borderColor: Boje.Naglasak2,
    borderWidth: 2,
    width: 150,
    height: 35,
    borderRadius: 5,
    opacity: 0.99,
    elevation: 3
  },
  naslov:{
    color: Boje.Primarna,
    fontFamily: "Baloo",
    fontWeight: "bold"
  }
  disabled: {
    color: Boje.Primarna,
    fontFamily: "Baloo",
    fontWeight: "bold",
    opacity: 0.5
    }
});

export default Tipka;

