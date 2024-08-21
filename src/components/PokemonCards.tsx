import { Dispatch, FC, SetStateAction } from "react";
import usePokemons from "../hooks/usePokemons";

interface PokemonCardsProps {
  setSelectedPokemonId: Dispatch<SetStateAction<number>>;
}

const PokemonCards: FC<PokemonCardsProps> = ({ setSelectedPokemonId }) => {
  const { pokemons, loading, fetchNext, totalCount, error } = usePokemons();

  return (
    <div className="pokemon-cards">
      <div className="pokemon-cards-wrapper">
        {pokemons.map((poke) => {
          const pokemonId = parseInt(
            poke.url.split("/").slice(-2, -1)[0] || "-1"
          );
          return (
            <button
              className="pokemon-card"
              key={poke.name}
              onClick={() => setSelectedPokemonId(pokemonId)}
            >
              {poke.name}
            </button>
          );
        })}
      </div>
      <p>
        Showing {pokemons.length} of {totalCount}
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={fetchNext}>Load more</button>
      )}
      {!!error && <p>{error}</p>}
    </div>
  );
};

export default PokemonCards;
