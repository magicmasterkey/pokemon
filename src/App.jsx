import { useState } from "react";
import PokemonApplication from "./components/PokemonApplication";
import "./App.css";

function App() {
  const [appRunning, setAppRunning] = useState(false);

  return (
    <main>
      <h1>Pokémon Display App</h1>
      <button
        onClick={() => {
          setAppRunning(!appRunning);
        }}
      >
        {appRunning ? "Stop" : "Start"} Pokémon App
      </button>
      {appRunning && <PokemonApplication />}
    </main>
  );
}

export default App;
