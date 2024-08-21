import { Pokemon, PokemonData } from "../types";
import { processPokemonResult } from "../utility";

type returnPokemons = (offset: number) => Promise<PokemonData>;

export const getPokemons: returnPokemons = async (offset = 0) => {
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}`
  );
  const data: PokemonData = await resp.json();
  return data;
};

type returnPokemon = (id: number) => Promise<Pokemon>;

export const getPokemon: returnPokemon = async (id) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data: PokemonData = await resp.json();
  const pokemon = processPokemonResult(data);
  return pokemon;
};
