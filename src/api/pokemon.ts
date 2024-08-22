import { Pokemon, PokemonData } from "../types";

type returnPokemons = (offset: number) => Promise<PokemonData>;

export const getPokemons: returnPokemons = async (offset = 0) => {
  const resp = await fetch(
    `http://127.0.0.1:8000/api/pokemons?offset=${offset}`
  );
  const data: PokemonData = await resp.json();
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return data;
};

type returnPokemon = (id: number) => Promise<Pokemon>;

export const getPokemon: returnPokemon = async (id) => {
  const resp = await fetch(`http://127.0.0.1:8000/api/pokemons/${id}`);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  const data = await resp.json();
  return data;
};

type returnFavPokemons = () => Promise<Pokemon[]>;

export const getFavPokemons: returnFavPokemons = async () => {
  const resp = await fetch(`http://127.0.0.1:8000/api/pokemons/favourites`);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  const data = await resp.json();
  return data.data;
};

export const markFavourite = async (data: Pokemon) => {
  const resp = await fetch(`http://127.0.0.1:8000/api/pokemons/favourites`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return;
};
