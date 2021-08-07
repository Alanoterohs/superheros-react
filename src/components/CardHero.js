function CardHero({ name, image, powerstats }) {
  return (
    <div>
      <span>{name}</span>
      <br/>
      <img
       src={image}
       alt={name}
      />
      <br/>
      <span>{powerstats[0].combat}</span>
      <br/>
      <span>{powerstats[0].durability}</span>
      <br/>
      <span>{powerstats[0].intelligence}</span>
      <br/>
      <span>{powerstats[0].power}</span>
      <br/>
      <span>{powerstats[0].speed}</span>
      <br/>
      <span>{powerstats[0].strength}</span>
      <br/>
      <button>ADD</button>
    </div>
  );
}

export default CardHero;
