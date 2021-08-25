import { useState, useEffect } from 'react';
import { addTeam } from '../utils/axiosReq';
import CardTeam from '../components/cardTeam';
import CardDetails from '../components/CardDetails';

function Team({ idHero, setMaxTeam, MaxTeam }) {

  const [teamHeros, setTeamHeros] = useState([]);
  const [renderDetails, setRenderDetails] = useState(false);
  const [renderHero, setRenderHero] = useState(0);

  useEffect(() => {
    addTeam(idHero).then(response => {
        //console.log(response);
        if (response.name === undefined) {
          return true;
        }

        setTeamHeros([...teamHeros, {
                response,
              },
            ]
          );
        //console.log(teamHeros);
      });
  }, [idHero]);

  const handleSubmit = (e, index) => {
    e.preventDefault();
    setRenderHero(index);
    setRenderDetails(!renderDetails);
  };

  const handleDelete = (e, indexRemove) => {
    e.preventDefault();
    let filterHero = teamHeros.filter((v, index) => index !== indexRemove);
    setTeamHeros(filterHero);
  };

  if (teamHeros.length > 5) {
    setMaxTeam(!MaxTeam);
  } else {
    setMaxTeam(false);
  };


  let result2 = 0;
  let summationHeight = 0;
  let averageHeight = 0;
  let summationWeight = 0;
  let averageWeight = 0;

  teamHeros.forEach((item, index) => {
      const { powerstats } = item.response;
      const { appearance } = item.response;

      let parseHeight = parseInt(appearance.height[1]); // Convierto el string a un entero
      summationHeight = (summationHeight + parseHeight); // sumatoria de la altura de los personajes
      averageHeight = summationHeight / (index + 1); // Obtengo el promedio

      //hago el mismo procedimiento pero con la masa(kg) de c/uno.
      let parseWeight = parseInt(appearance.weight[1]);
      summationWeight = summationWeight + parseWeight;
      averageWeight = summationWeight / (index + 1);

      result2 = result2 + parseInt(powerstats.combat) + parseInt(powerstats.durability) +
      parseInt(powerstats.intelligence) + parseInt(powerstats.power) + parseInt(powerstats.speed) +
      parseInt(powerstats.strength); //Sumatoria de todos los powerstats
    });

  if (renderDetails) {
    const { response } = teamHeros[renderHero];
    return (
      <CardDetails
        name = {response.name}
        image = {response.image.url}
        height = {response.appearance.height[1]}
        weight = {response.appearance.weight[1]}
        aliases = {response.biography.aliases[0]}
        eyes = {response.appearance['eye-color']}
        hair = {response.appearance['hair-color']}
        base = {response.work.base}
        handleSubmit={handleSubmit}
        />

    );
  }

  return (
      <div>
        <h1 className= "text-center" style = {{ color: 'white' }}> TEAM </h1>
        <h4 className= "text-center"> Powerstats del equipo:<span>{result2}</span></h4>
        <h4 className= "text-center"> Altura promedio del equipo: <span>{averageHeight.toFixed(2)} cm</span></h4>
        <h4 className= "text-center"> Peso promedio del equipo: <span>{averageWeight.toFixed(2)} kg</span></h4>
        {teamHeros.map((heros, index) => (
            <CardTeam
              key= {index}
              index = {index}
              name = {heros.response.name}
              image = {heros.response.image.url}
              combat = {heros.response.powerstats.combat}
              durability = {heros.response.powerstats.durability}
              intelligence = {heros.response.powerstats.intelligence}
              power = {heros.response.powerstats.power}
              speed = {heros.response.powerstats.speed}
              strength = {heros.response.powerstats.strength}
              handleSubmit = {handleSubmit}
              handleDelete= {handleDelete}
              />
        ))}
      </div>
    );
}

export default Team;

//Punto:
// En la pantalla de Home se deberá mostrar, además de los miembros del equipo:
// ● Acumulativo de powerstats, agrupados por cada uno, es decir: suma total de intelligence,
// strength, etc. de todos los miembros individuales del equipo.
// ● El powerstat que más acumulativo tenga debería aparecer arriba para categorizar el tipo
// de equipo (inteligencia, fuerza, etc.).
// ● Pesos y altura promedio del equipo.
// ● Se deberá poder eliminar un miembro del equipo, lo que generará un nuevo promedio de
// peso, acumulativo de powerstats, etc.
