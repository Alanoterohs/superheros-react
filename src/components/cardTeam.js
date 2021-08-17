import { useState } from 'react';

function CardTeam({ name, image, powerstats, combat, durability, intelligence, power, speed, strength }) {

  // <img
  // src={image.url}
  // alt={name}
  // />
  return (
    <div>
      <span>{name}</span>
      <br/>
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
    </div>
  );
}

export default CardTeam;
