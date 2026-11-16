import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokemonApplication() {
  useEffect();
  const [activePkmn, setActivePkmn] = useState(null);

  return (
    <div>
      <Pokemon />
      <Select />
    </div>
  );
}
export default PokemonApplication;
