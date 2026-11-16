import { useState } from "react";
import PokemonApplication from "./components/PokemonApplication";
import "./App.css";

function App() {

  const [appRunning, setAppRunning] = useState(false);

  return (<>
    <PokemonApplication/>
    <button>Start Pokémon App</button>
  </>);
}

export default App;
