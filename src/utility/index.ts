import { Pokemon } from "../types";

export const processPokemonResult = (data: any): Pokemon => {
  const { id, name, height, weight, order, sprites, abilities, forms, types } =
    data;
  return {
    id,
    height,
    icon: sprites["front_default"],
    name,
    order,
    weight,
    abilities: abilities.length,
    forms: forms.length,
    types: types.length,
    favourite: id % 2 === 0,
  };
};
