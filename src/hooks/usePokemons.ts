import { useState, useEffect } from "react";
import { PokemonOverview } from "../types";
import { getPokemons } from "../api/pokemon";

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonOverview[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemons = async (offset: number = 0) => {
    setLoading(true);
    try {
      setLoading(true);
      const data = await getPokemons(offset);
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
    fetchPokemons(pokemons.length);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { pokemons, totalCount, fetchNext, loading, error };
};

export default usePokemons;
