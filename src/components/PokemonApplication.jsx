import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokemonApplication() {
  const [allPkmn, setAllPkmn] = useState([]);
  const [activePkmn, setActivePkmn] = useState("");
  const [pkmnData, setPkmnData] = useState(null);
  const [typings, setTypings] = useState("");

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    const getPkmn = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      setAllPkmn(data.results);
    };
    getPkmn();
  }, []);

  useEffect(() => {
    const getActivePkmn = async () => {
      if (activePkmn) {
        const res = await fetch(activePkmn);
        const data = await res.json();

        setPkmnData(await data);
      }
    };
    getActivePkmn();
  }, [activePkmn]);

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
      <p>Choose a Pokémon</p>
      <select
        value={activePkmn}
        onChange={(e) => setActivePkmn(e.target.value)}
      >
        <option value="">Your choice</option>
        {allPkmn.map((pkmn, i) => (
          <option value={pkmn.url} key={i}>
            {`${i + 1}. ${capitalize(pkmn.name)}`}
          </option>
        ))}
      </select>
      {pkmnData && (
        <Pokemon
          pkmnName={capitalize(pkmnData.name)}
          imgUrl={pkmnData.sprites.other.home.front_default}
          typing={typings}
          height={pkmnData.height}
          weight={pkmnData.weight}
        />
      )}
    </div>
  );
}
export default PokemonApplication;
