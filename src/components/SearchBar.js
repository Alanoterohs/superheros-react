function SearchBar({ name, setName }) {
  return (
    <form className= "text-center" onSubmit= {(e) => e.preventDefault()}>
      <input
        placeholder= 'search hero'
        value= {name}
        onChange= {(e) => setName(e.target.value)}
        />
    </form>
  );
}

export default SearchBar;

// Punto 3. Buscador de Héroes
// ● Nombre del héroe.
// ● Imagen.
// ● Acciones para agregarlo al equipo

// <form className= "text-center" onSubmit= {(e) => e.preventDefault()}>
//   <input
//     placeholder= 'search hero'
//     value= {name}
//     onChange= {(e) => setName(e.target.value)}
//     />
// </form>
