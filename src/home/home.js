import React, { useEffect, useState } from 'react';
import { searchByName } from '../utils/axiosReq';
import CardHero from '../components/CardHero';

function Home(){
  const [heros, setHeros] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    searchByName(name).then(response => {
      console.log(response);

      if (response.data.error) {
        return true;
      } else {
        const data = [response.data.results];
        setHeros(...data);
        console.log(heros);
      }
    });
  }, [name]);

  return (
    <div>
      <form onSubmit= {(e) => e.preventDefault()}>
        <input
          placeholder= 'search hero'
          value= {name}
          onChange= {(e) => setName(e.target.value)}
          />
      </form>
      {heros.map((data, index) => (
        <div key={index}>
          <CardHero
            name = {data.name}
            image = {data.image.url}
            powerstats = {[data.powerstats]}
            />
        </div>
      ))}
    </div>
  );
}

// ● Nombre del héroe.
// ● Imagen.
// ● Powerstats.
// ● Acciones para ver el detalle o eliminarlo del equipo.

export default Home;
