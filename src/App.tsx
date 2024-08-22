import { useState } from "react";
import "./App.scss";
import PokemonCards from "./components/PokemonCards";
import PokemonDetails from "./components/PokemonDetails";
import Modal from "./components/shared/Modal";
import { getFavPokemons } from "./api/pokemon";
import FavouritePokemonsGrid from "./components/FavouritePokemonsGrid";
import { Pokemon } from "./types";

function App() {
  const [selectedPokemonId, setSelectedPokemonId] = useState<number>(-1);
  const [showFavourites, setShowFavourites] = useState(false);
  const [favouritePokemons, setFavouritePokemons] = useState<Pokemon[]>([]);

  const openFavourites = async () => {
    try {
      const favs = await getFavPokemons();
      setFavouritePokemons(favs);
      setShowFavourites(true);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch favourite pokemons");
    }
  };

  return (
    <>
      <div className="header">
        <h1>Pokemons</h1>
        <button onClick={openFavourites}>Favourites</button>
      </div>
      <div className="pokemon-section">
        <PokemonCards setSelectedPokemonId={setSelectedPokemonId} />
        {selectedPokemonId > 0 && (
          <Modal
            title="Detailed View"
            isOpen={!!selectedPokemonId}
            onClose={() => setSelectedPokemonId(-1)}
          >
            <PokemonDetails id={selectedPokemonId} />
          </Modal>
        )}

        <Modal
          title={`Favourite Pokemons ${favouritePokemons.length}`}
          isOpen={showFavourites}
          onClose={() => setShowFavourites(false)}
        >
          <FavouritePokemonsGrid pokemons={favouritePokemons} />
        </Modal>
      </div>
    </>
  );
}

export default App;
