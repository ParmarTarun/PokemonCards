import { useState } from "react";
import "./App.scss";
import PokemonCards from "./components/PokemonCards";
import PokemonDetails from "./components/PokemonDetails";
import Modal from "./components/shared/Modal";

function App() {
  const [selectedPokemonId, setSelectedPokemonId] = useState<number>(-1);

  return (
    <>
      <div className="header">
        <h1>Pokemons</h1>
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
      </div>
    </>
  );
}

export default App;
