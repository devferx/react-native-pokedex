/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';

import {pokemonApi} from '../api/pokemonApi';
import {PokemonFull} from '../interfaces/pokemonInterfaces';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);

  const fetchPokemon = async () => {
    const resp = await pokemonApi.get<PokemonFull>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );

    setPokemon(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return {isLoading, pokemon};
};
