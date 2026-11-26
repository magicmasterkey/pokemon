import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokemonApplication() {
  const [allPkmn, setAllPkmn] = useState([]);
  const [activePkmn, setActivePkmn] = useState("");
  const [pkmnData, setPkmnData] = useState(null);
  const [typings, setTypings] = useState("");

  useEffect(() => {
    const getPkmn = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      setAllPkmn(data.results);
    };
    getPkmn();
  }, []);

  const getActivePkmn = async () => {
    if (activePkmn) {
      const res = await fetch(activePkmn);
      const data = await res.json();

      setPkmnData(await data);
    }
  };

  useEffect(() => {
    if (pkmnData) {
      if (pkmnData.types[1]) {
        setTypings(
          `${pkmnData.types[0].type.name} / ${pkmnData.types[1].type.name}`,
        );
      } else {
        setTypings(pkmnData.types[0].type.name);
      }
    }
  }, [pkmnData]);

  return (
    <div>
      {pkmnData && (
        <Pokemon
          pkmnName={pkmnData.name}
          imgUrl={pkmnData.sprites.other.home.front_default}
          typing={typings}
          height={pkmnData.height}
          weight={pkmnData.weight}
        />
      )}
      <p>Välj en Pokémon att visa</p>
      <select
        value={activePkmn}
        onChange={(e) => setActivePkmn(e.target.value)}
      >
        <option value="">Ditt val</option>
        {allPkmn.map((pkmn, i) => (
          <option value={pkmn.url} key={i}>
            {pkmn.name}
          </option>
        ))}
      </select>
      <button onClick={getActivePkmn}>Visa din pokemon</button>
    </div>
  );
}
export default PokemonApplication;
