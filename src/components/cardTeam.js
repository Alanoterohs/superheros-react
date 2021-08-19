function CardTeam({ index, name, image, combat, durability, intelligence, power, speed, strength, handleSubmit }) {
  let total = parseInt(combat) + parseInt(durability) +
  parseInt(intelligence) + parseInt(power) + parseInt(speed) + parseInt(strength)
  return (
    <div className="card text-white m-3 d-inline-flex text-center" style= {{ width: '15rem', backgroundColor: '#3E4247' }}>
      <form onSubmit= {(e) => handleSubmit(e, index)} style= {{ backgroundColor: '#21262D' }} >
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
        <div className = "m-2" >
          <h4>summation powerstats: {total}</h4>
          <h6>Combat: {combat} </h6>
          <h6>Durability: {durability} </h6>
          <h6>Intelligence: {intelligence} </h6>
          <h6>Power: {power} </h6>
          <h6>Speed: {speed} </h6>
          <h6>Strength: {strength} </h6>
        </div>
          <button className="btn btn-outline-success m-1"> Details </button>
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
