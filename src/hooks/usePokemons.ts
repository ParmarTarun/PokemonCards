import { useState, useEffect } from "react";
import { PokemonData, PokemonOverview } from "../types";

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonOverview[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getPokemons = async (offset: number = 0) => {
    setLoading(true);
    try {
      setLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch the pokemons");
      }
      const data: PokemonData = await response.json();
      setPokemons([...pokemons, ...data.results]);
      if (!totalCount) {
        setTotalCount(data.count);
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const fetchNext = () => {
    getPokemons(pokemons.length);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return { pokemons, totalCount, fetchNext, loading, error };
};

export default usePokemons;
