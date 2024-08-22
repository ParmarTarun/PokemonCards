import { FC } from "react";
import { Pokemon } from "../../types";

interface PokemonInfoPillProps {
  pokemon: Pokemon;
}

const PokemonInfoPill: FC<PokemonInfoPillProps> = ({ pokemon }) => {
  return (
    <div className="info-wrapper">
      <p className="pokemon-info">Height: {pokemon.height}</p>
      <p className="pokemon-info">Weight: {pokemon.weight}</p>
      <p className="pokemon-info">Order: {pokemon.order}</p>
      <p className="pokemon-info">Abilities: {pokemon.abilities}</p>
      <p className="pokemon-info">Forms: {pokemon.forms}</p>
      <p className="pokemon-info">Types: {pokemon.types}</p>
    </div>
  );
};

export default PokemonInfoPill;
