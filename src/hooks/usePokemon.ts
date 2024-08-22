import { useState, useEffect } from "react";
import { Pokemon } from "../types";
import { getPokemon } from "../api/pokemon";

const usePokemon = (id: number) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const data = await getPokemon(id);

      setSelectedPokemon(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id < 0) return;
    fetchPokemon();
  }, [id]);

  return { selectedPokemon, refreshPokemon: fetchPokemon, loading, error };
};

export default usePokemon;
