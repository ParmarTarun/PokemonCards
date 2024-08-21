import { useState, useEffect } from "react";
import { Pokemon } from "../types";
import { processPokemonResult } from "../utility";

const usePokemon = (id: number) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getPokemon = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch the pokemons");
      }
      const data: Pokemon = processPokemonResult(await response.json());
      setSelectedPokemon(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id < 0) return;
    getPokemon();
  }, [id]);

  return { selectedPokemon, loading, error };
};

export default usePokemon;
