import { FC } from "react";
import { Pokemon } from "../types";
import PokemonInfoPill from "./shared/PokemonInfoPill";
import { AiFillStar } from "react-icons/ai";

interface FavouritePokemonsGridProps {
  pokemons: Pokemon[];
}

const FavouritePokemonsGrid: FC<FavouritePokemonsGridProps> = ({
  pokemons,
}) => {
  return (
    <div className="pokemons-grid">
      {pokemons.map((poke) => (
        <div className="pokemon-card">
          <img src={poke.icon} alt={`${poke.name}_thumbnail`} />
          <h2>{poke.name}</h2>

          <PokemonInfoPill pokemon={poke} />
        </div>
      ))}
    </div>
  );
};

export default FavouritePokemonsGrid;
