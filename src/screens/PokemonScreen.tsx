import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParams} from '../navigator/Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {top} = useSafeAreaInsets();
  const {simplePokemon, color} = route.params;
  const {name, id, picture} = simplePokemon;

  return (
    <View style={{...styles.headerContainer, backgroundColor: color}}>
      <TouchableOpacity
        style={{...styles.backButton, top: top + 20}}
        activeOpacity={0.8}
        onPress={() => navigation.pop()}>
        <Icon name="arrow-back-outline" color="white" size={35} />
      </TouchableOpacity>

      {/* Nombre del Pokemon */}
      <Text style={{...styles.pokemonName, top: top + 50}}>
        {name + '\n'} #{id}
      </Text>
      {/* Pokebola Blanca */}
      <Image
        source={require('../assets/pokebola-blanca.png')}
        style={styles.pokeball}
      />

      {/* Imagen del Pokemon */}
      <FadeInImage uri={picture} style={styles.pokemonImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
});
