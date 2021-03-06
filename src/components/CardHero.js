function CardHero({ id, name, image, powerstats, handleSubmit, index }) {
// #21262D
// #0f0e17
  return (
      <div className="card text-white m-3 d-inline-flex text-center" style= {{ width: '15.01rem', backgroundColor: '#0f0e17', border: '2px solid black' }}>
        <form onSubmit= {(e) => handleSubmit(e, id, index)} style= {{ backgroundColor: '#242629' }}>
          <h6
          className = "m-2"
          style= {{ color: '#fffffe', backgroundColor: '#242629' }}
          >{name}</h6>
          <img
          style = {{ width: 235, height: 300 }}
          className="img-rounded"
          src={image}
          alt={name}
          />
          <br/>
          <br/>
          <button className="button-general">Add Team</button>
        </form>
      </div>
  );
}

// ● Nombre del héroe.
// ● Imagen.
// ● Acciones para agregarlo al equipo

export default CardHero;
