import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParams} from '../navigator/Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemon} from '../hooks/usePokemon';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {top} = useSafeAreaInsets();
  const {simplePokemon, color} = route.params;
  const {name, id, picture} = simplePokemon;
  const {isLoading, pokemon} = usePokemon(id);

  return (
    <View style={styles.mainContainer}>
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
      {/* Detalles y Loading */}
      <View style={styles.activityIndicator}>
        <ActivityIndicator color={color} size={50} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
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
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
