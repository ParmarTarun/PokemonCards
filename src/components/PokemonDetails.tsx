import { FC, useState } from "react";
import usePokemon from "../hooks/usePokemon";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { markFavourite } from "../api/pokemon";

interface PokemonDetailsProps {
  id: number;
}

const PokemonDetails: FC<PokemonDetailsProps> = ({ id }) => {
  const {
    selectedPokemon: pokemon,
    refreshPokemon,
    loading,
    error,
  } = usePokemon(id);

  const [markingFavourite, setMarkingFavourite] = useState(false);

  const handleFavourite = async () => {
    if (!pokemon) return;

    setMarkingFavourite(true);
    try {
      await markFavourite(pokemon);
      refreshPokemon();
    } catch (error) {
      console.log(error);
      alert("Failed to mark favourite");
    } finally {
      setMarkingFavourite(false);
    }
  };

  if (!pokemon) {
    return <></>;
  }

  return (
    <div className="pokemon-details-wrapper">
      {loading && <p>Loading...</p>}
      <div className="pokemon-details">
        <div className="pokemon-thumbnail">
          <img src={pokemon.icon} alt="" />
        </div>
        <div className="pokemon-bio">
          <h2>
            {pokemon.name}
            {markingFavourite ? (
              <span>Loading...</span>
            ) : (
              <button onClick={handleFavourite}>
                {pokemon.favourite ? <AiFillStar /> : <AiOutlineStar />}
              </button>
            )}
          </h2>
          <div className="info-wrapper">
            <p className="pokemon-info">Height: {pokemon.height}</p>
            <p className="pokemon-info">Weight: {pokemon.weight}</p>
            <p className="pokemon-info">Order: {pokemon.order}</p>
            <p className="pokemon-info">Abilities: {pokemon.abilities}</p>
            <p className="pokemon-info">Forms: {pokemon.forms}</p>
            <p className="pokemon-info">Types: {pokemon.types}</p>
          </div>
        </div>
      </div>
      {!!error && <p>{error}</p>}
    </div>
  );
};

export default PokemonDetails;
