function CardTeam({ index, name, image, combat, durability, intelligence, power, speed, strength, handleSubmit, handleDelete }) {
  let total = parseInt(combat) + parseInt(durability) +
  parseInt(intelligence) + parseInt(power) + parseInt(speed) + parseInt(strength);

  return (
    <div className="card text-white m-3 d-inline-flex text-center" style= {{ width: '15.20rem', backgroundColor: '#21262D', border: '2px solid #010101' }}>
      <form style= {{ backgroundColor: '#21262D' }} >
        <h6
        className = "m-2"
        style= {{ backgroundColor: '#21262D' }}
        >{name}</h6>
        <img
        style = {{ width: 239, height: 300 }}
        className="img-rounded"
        src={image}
        alt={name}
        />
        <div className = "m-2" style= {{ backgroundColor: '#21262D' }}  >
          <h6>Powerstats: {total}</h6>
          <h6>Combat: {combat} </h6>
          <h6>Durability: {durability} </h6>
          <h6>Intelligence: {intelligence} </h6>
          <h6>Power: {power} </h6>
          <h6>Speed: {speed} </h6>
          <h6>Strength: {strength} </h6>
        </div>
          <button
          onClick = {(e) => handleSubmit(e, index)}
          className="button-general"> Details </button>
          <button
          onClick={(e) => handleDelete(e, index)}
          className="button-delete"> Delete </button>
      </form>
    </div>
  );
}

// Punto 2. Equipo
//
// ● Nombre del héroe.
// ● Imagen.
// ● Powerstats.
// ● Acciones para ver el detalle o eliminarlo del equipo.

export default CardTeam;
