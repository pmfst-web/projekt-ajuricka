import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Boje from '../constants/Boje'

const UnosZeljeEkran = () => {
  return (
    <View style={stil.ekran}>
      <Text>Ekran za unos novih podataka</Text>
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
});

export default UnosZeljeEkran;