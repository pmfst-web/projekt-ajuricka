import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Boje from '../constants/Boje';
import {useDispatch} from 'react-redux'
import {promjenaFavorita} from '../store/actions/radovi'
import {MaterialIcons} from '@expo/vector-icons'

const ListaElement = (props) => {
  const dispatch = useDispatch()

  const akcijaFavorit = () =>{
    dispatch(promjenaFavorita(props.id))
  }
  
  return (
      <TouchableOpacity style={{alignItems: "center"}}
        onPress={props.onPress}>
        <View style={{ ...stil.tipka, ...props.style }}>
          <View style={stil.ime}>
            <Text style={stil.naslov}>{props.naslov}</Text>
            {props.pisac && <Text style={{fontStyle: "italic"}}>, {props.pisac}</Text>}
          </View>
          <View style={stil.redak}>
          {props.favorit !== undefined && 
            <View style={stil.stupac}>
              <MaterialIcons name={props.favorit ? "star" : "star-border"} size={26} color={Boje.Primarna} onPress={akcijaFavorit} />
            </View>}
          </View>
        </View>
      </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tipka: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Boje.Naglasak1,
    borderColor: Boje.Bijela,
    borderWidth: 2,
    maxWidth: "80%",
    width: 400,
    height: 50,
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 15,
    elevation: 3,
    flexDirection: 'row',
    opacity: 0.99,
    flex: 0.99,
  },
  naslov: {
    color: Boje.Primarna,
    numberOfLines: 1,
  },
  ime: {
    width: '70%',
    numberOfLines: 1,
    ellipsizeMode: 'tail',
    flex: 1,
    padding: 5,
    flexDirection: 'row',
  }
});

export default ListaElement;