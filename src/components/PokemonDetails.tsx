import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';

import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Types</Text>

          <View style={styles.listContainer}>
            {pokemon.types.map(({type}, index) => (
              <Text key={index} style={styles.listContainerText}>
                {type.name}
              </Text>
            ))}
          </View>
        </View>

        {/* Peso */}
        <View style={styles.container}>
          <Text style={styles.title}>Peso</Text>
          <Text style={styles.regularText}>{pokemon.weight}kg</Text>
        </View>

        {/* Types y Peso */}
        <View style={styles.container}>
          <Text style={styles.title}>Sprites</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprite}
          />
          <FadeInImage
            uri={pokemon.sprites.back_default}
            style={styles.basicSprite}
          />
          <FadeInImage
            uri={pokemon.sprites.front_shiny}
            style={styles.basicSprite}
          />
          <FadeInImage
            uri={pokemon.sprites.back_shiny}
            style={styles.basicSprite}
          />
        </ScrollView>

        {/* Habilidades Base */}
        <View style={styles.container}>
          <Text style={styles.title}>Habilidades Base</Text>
          <View style={styles.listContainer}>
            {pokemon.abilities.map(({ability}, index) => (
              <Text key={index} style={styles.listContainerText}>
                {ability.name}
              </Text>
            ))}
          </View>

          {/* Movimientos */}
          <Text style={styles.title}>Movimientos</Text>
          <View style={styles.listContainer}>
            {pokemon.moves.map(({move}, index) => (
              <Text key={index} style={styles.listContainerText}>
                {move.name}
              </Text>
            ))}
          </View>

          {/* Stats */}
          <Text style={styles.title}>Stats</Text>

          {pokemon.stats.map(({stat, base_stat}, index) => (
            <View key={stat.name + index} style={styles.statsContainer}>
              <Text style={styles.statsTitle}>{stat.name}</Text>

              <Text key={index} style={styles.boldText}>
                {base_stat}
              </Text>
            </View>
          ))}
        </View>

        {/* Sprite Final */}
        <View style={styles.finalSpriteContainer}>
          <FadeInImage
            style={styles.basicSprite}
            uri={pokemon.sprites.front_default}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  mainContainer: {
    marginTop: 370,
  },
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 17,
  },
  boldText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listContainerText: {
    fontSize: 17,
    marginRight: 10,
  },
  basicSprite: {
    width: 150,
    height: 150,
  },
  finalSpriteContainer: {
    marginVertical: 28,
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
  },
  statsTitle: {
    fontSize: 17,
    marginRight: 1,
    width: 150,
  },
});
