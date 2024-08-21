export type PokemonData = {
  count: number;
  results: PokemonOverview[];
};

export type PokemonOverview = {
  name: string;
  url: string;
};
export type Pokemon = {
  id: number;
  favourite: boolean;
  name: string;
  height: number;
  weight: number;
  order: number;
  icon: string;
  abilities: number;
  forms: number;
  types: number;
};
