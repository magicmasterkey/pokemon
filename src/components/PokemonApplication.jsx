import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokemonApplication() {
  useEffect(async function getPkmn() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = res.json();
  }, []);

  const [activePkmn, setActivePkmn] = useState(null);

  return (
    <div>
      <Pokemon />
      <select />
    </div>
  );
}
export default PokemonApplication;
