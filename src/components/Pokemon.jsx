function Pokemon({ pkmnName, imgUrl, typing, height, weight }) {
  return (
    <div className="pkmnCard">
      <div className="textContainer">
        <h2>{pkmnName}</h2>
        <p>Typing: {typing}</p>
        <p>
          Height: {height}ft <br /> Weight: {weight}lbs
        </p>
      </div>
      <img src={imgUrl} alt={pkmnName} />
    </div>
  );
}
export default Pokemon;
