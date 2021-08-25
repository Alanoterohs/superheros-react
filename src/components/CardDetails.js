function CardDetails({ name, image, height, weight, aliases, eyes, hair, base, handleSubmit }) {

  return (
    <div className= 'details-container'>
      <form className= 'details-hero' onSubmit = {(e) => handleSubmit(e, name)}>
        <div>
          <button className= 'button-details' onSubmit = {handleSubmit}>X</button>
        </div>
          <div className= ''>
            <div style = {{ backgroundColor: '#21262D' }}>
              <img
                style = {{ width: 239, height: 300 }}
                className="img-rounded m-2"
                src={image}
                alt={name}
                />
            </div>
            <div style = {{ backgroundColor: '#21262D' }}>
              <h6>Name: {name}</h6>
              <h6>Altura: {height}</h6>
              <h6>Peso: {weight}</h6>
              <h6>Alias: {aliases}</h6>
              <h6>Color de ojos: {eyes}</h6>
              <h6>Color de cabello: {hair}</h6>
              <h6>Lugar de trabajo: {base}</h6>
            </div>
          </div>
      </form>
    </div>
  );
}

//Punto 4 (detalles)
// ● Peso.
// ● Altura.
// ● Nombre.
// ● Alias.
// ● Color de ojos.
// ● Color de cabello.
// ● Lugar de trabajo.

export default CardDetails;
