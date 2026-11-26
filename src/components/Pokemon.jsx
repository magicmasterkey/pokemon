
function Pokemon({ pkmnName, imgUrl, typing, height, weight }) {
 
  return (
    <div className="pkmnCard">
      <h2>{pkmnName}</h2>
      <img src={imgUrl} alt={pkmnName} />
      <p>
        Typing: {typing}
      </p>
      <p>
        Height: {height}ft Weight: {weight}lbs
      </p>
    </div>
  );
}
export default Pokemon;
