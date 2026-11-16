function Pokemon({ Pkmn }) {
 
  return (
    <div className="pkmnCard">
      <h2>{Pkmn.name}</h2>
      <img src={Pkmn.image} alt={Pkmn.name} />
      <p>{typing}</p>
      <p>
        {Pkmn.weight} {Pkmn.height}
      </p>
    </div>
  );
}
export default Pokemon;
