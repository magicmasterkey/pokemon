import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokemonApplication() {
  const [allPkmn, setAllPkmn] = useState([]);
  const [activePkmn, setActivePkmn] = useState(null);

  useEffect(() => {
    const getPkmn = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      setAllPkmn(data.results);
    };
    getPkmn();
  }, []);

  console.log(allPkmn);
  return (
    <div>
      {/*activePkmn && <Pokemon Pkmn={activePkmn} />*/}
      <p>Välj en Pokémon att visa</p>
      <select onChange={(e) => setActivePkmn(e.target.value)}>
        <option value="">Ditt val</option>
        {allPkmn.map((pkmn) => {
          console.log(pkmn.name);
        })}
      </select>
    </div>
  );
}
export default PokemonApplication;
