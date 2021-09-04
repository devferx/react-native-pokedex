import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageColors from 'react-native-image-colors';

import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {RootStackParams} from '../navigator/Tab1';
import {FadeInImage} from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

type PokemonScreenNavigationProp = StackNavigationProp<RootStackParams, any>;

export const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('hotpink');
  const isMounted = useRef(true);
  const navigation = useNavigation<PokemonScreenNavigationProp>();

  useEffect(() => {
    if (!isMounted.current) {
      return;
    }

    ImageColors.getColors(pokemon.picture, {
      fallback: 'hotpink',
    }).then(colors => {
      colors.platform === 'android'
        ? setBgColor(colors.dominant || 'hotpink')
        : setBgColor(colors.background || 'hotpink');
    });

    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('PokemonScreen', {
          simplePokemon: pokemon,
          color: bgColor,
        })
      }>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.42,
          backgroundColor: bgColor,
        }}>
        <Text style={styles.name}>
          {pokemon.name}
          {'\n#' + pokemon.id}
        </Text>
        <View style={styles.pokebolaContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -20,
    bottom: -20,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
  pokebolaContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    opacity: 0.5,
    overflow: 'hidden',
    width: 100,
    height: 100,
  },
});
