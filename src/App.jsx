import { useState } from "react";
import PokemonApplication from "./components/PokemonApplication";
import "./App.css";

function App() {

  const [appRunning, setAppRunning] = useState(false);

  return (
  <main>
    <h1>Pokémon Display App</h1>
    {appRunning && <PokemonApplication/>}
    <button onClick={() => {setAppRunning(!appRunning)}}>{appRunning ? Start : Stop} Pokémon App</button>
  </main>);
}

export default App;
