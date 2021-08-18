function CardHero({ id, name, image, powerstats, setIdHero }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    setIdHero(id);
  };

  return (
      <div className="card text-white m-3 d-inline-flex text-center" style= {{ width: '15rem', backgroundColor: '#3E4247' }}>
        <form onSubmit= {handleSubmit} style= {{ backgroundColor: '#21262D' }} >
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
          <br/>
          <br/>
          <button className="btn btn-outline-success m-1">Add Team</button>
        </form>
      </div>
  );
}

// '#21262D'
// ● Nombre del héroe.
// ● Imagen.
// ● Acciones para agregarlo al equipo

export default CardHero;
