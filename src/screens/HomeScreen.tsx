import React from 'react';
import {Text, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';

import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList} = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBg}
      />
      <Text
        style={{...styles.title, ...styles.globalMargin, marginTop: top + 20}}>
        Pokedex
      </Text>
    </>
  );
};
