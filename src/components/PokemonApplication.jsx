import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokemonApplication() {
  const [allPkmn, setAllPkmn] = useState(null);
  const [activePkmn, setActivePkmn] = useState(null);

  useEffect(() => {
    const getPkmn = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = res.json();

      setAllPkmn(data);
    };
    getPkmn();
  }, []);

  return (
    <div>
      {activePkmn && <Pokemon Pkmn={activePkmn} />}
      <p>Välj en Pokémon att visa</p>
      <select onChange={(e) => setActivePkmn(e.target.value)}>
        <option value="">Ditt val</option>
        {console.log(allPkmn)}
      </select>
    </div>
  );
}
export default PokemonApplication;
