import { useState } from 'react';
import CardTeam from './cardTeam';

function CardDetails({ name, image, height, weight, aliases, eyes, hair, base, handleSubmit }) {

  return (
    <div className= 'details-container'>
      <form className= 'details-hero' onSubmit = {handleSubmit}>
        <button onSubmit = {handleSubmit}>X</button>
        <div>
          <h6>Name: {name}</h6>
          <h6>Altura: {height}</h6>
          <h6>Peso: {weight}</h6>
          <h6>Alias: {aliases}</h6>
          <h6>Color de ojos: {eyes}</h6>
          <h6>Color de cabello: {hair}</h6>
          <h6>Lugar de trabajo: {base}</h6>
        </div>
      </form>
    </div>
  );
}

// ● Peso.
// ● Altura.
// ● Nombre.
// ● Alias.
// ● Color de ojos.
// ● Color de cabello.
// ● Lugar de trabajo.

// <form>
//   <CardTeam
//     name = {name}
//     image = {image}
//     combat = {combat}
//     durability = {durability}
//     intelligence = {intelligence}
//     power = {power}
//     speed = {speed}
//     strength = {strength}
//     />
// </form>
// <button onClick={() => setRenderDetails(!renderDetails)}>Details</button>


export default CardDetails;
