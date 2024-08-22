import { FC } from "react";
import { Pokemon } from "../types";

interface FavouritePokemonsGridProps {
  pokemons: Pokemon[];
}

const FavouritePokemonsGrid: FC<FavouritePokemonsGridProps> = ({
  pokemons,
}) => {
  return <div>FavouritePokemonsGrid {pokemons.length}</div>;
};

export default FavouritePokemonsGrid;
