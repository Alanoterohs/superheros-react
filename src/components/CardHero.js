function CardHero({ id, name, image, powerstats, handleSubmit, index }) {
// #21262D
// #0f0e17
  return (
      <div className="card text-white m-3 d-inline-flex text-center" style= {{ width: '15.01rem', backgroundColor: '#3E4247'}}>
        <form onSubmit= {(e) => handleSubmit(e, id, index)} style= {{ backgroundColor: '#21262D' }}>
          <h6
          className = "m-2"
          style= {{ color: '#fffffe', backgroundColor: '#21262D' }}
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

// Color Rojo y negro
// <div className="card text-white m-3 d-inline-flex text-center" style= {{ width: '15.01rem', backgroundColor: '#fffffe' }}>
//   <form onSubmit= {(e) => handleSubmit(e, id, index)} style= {{ backgroundColor: '#fffffe' }} >
//     <h6
//     className = "m-2"
//     style= {{ backgroundColor: '#fffffe', color: '#0f0e17' }}
//     >{name}</h6>
//     <img
//     style = {{ width: 239, height: 300 }}
//     className="img-rounded"
//     src={image}
//     alt={name}
//     />
//     <br/>
//     <br/>
//     <button className="button-general">Add Team</button>
//   </form>
// </div>


export default CardHero;
