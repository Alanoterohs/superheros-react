function SearchBar({ name, setName }) {
  return (
    <form className= "text-center" onSubmit= {(e) => e.preventDefault()}>
      <input
        placeholder= 'Search hero...'
        value= {name}
        className = 'input'
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
