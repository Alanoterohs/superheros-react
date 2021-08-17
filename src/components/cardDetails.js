function CardDetails({ name, image, powerstats, combat, durability, intelligence, power, speed, strength }) {

  return (
    <div>
        <span>{name}</span>
        <br/>
        <img
        src={image.url}
        alt={name}
        />
        <br/>
        <span>{combat}</span>
        <br/>
        <span>{durability}</span>
        <br/>
        <span>{intelligence}</span>
        <br/>
        <span>{power}</span>
        <br/>
        <span>{speed}</span>
        <br/>
        <span>{strength}</span>
        <button>details</button>
    </div>
  );
}

export default CardDetails;
