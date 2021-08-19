import { useState, useEffect } from 'react';
import { addTeam } from '../utils/axiosReq';
import CardTeam from '../components/cardTeam';
import CardDetails from '../components/CardDetails';

function Team({ idHero }) {

  const [teamHeros, setTeamHeros] = useState([]);
  const [renderDetails, setRenderDetails] = useState(false);
  const [renderHero, setRenderHero] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    addTeam(idHero).then(response => {
      console.log(response);
        const { powerstats } = response;
        if (response.name == undefined) {
          return true;
        }
        summationPowerstats(powerstats.combat,
          powerstats.durability,
          powerstats.intelligence,
          powerstats.power,
          powerstats.speed,
          powerstats.strength);
        setTeamHeros([...teamHeros, {
                response,
              },
            ]
          );
        console.log(teamHeros);
      });
  }, [idHero]);

  const handleSubmit = (e, index) => {
    e.preventDefault();
    setRenderHero(index);
    setRenderDetails(!renderDetails);
  };

  // let total = 0;
  // const summationPowerstats = (combat, durability, intelligence, power, speed, strength) => {
  //   total = parseInt(combat) + parseInt(durability) +
  //   parseInt(intelligence) + parseInt(power) + parseInt(speed) + parseInt(strength);
  //   const powerstatsAndAverage = {
  //     powerstats: total,
  //   };
  //   setData([...data, powerstatsAndAverage]);
  // };
  // En la pantalla de Home se deberá mostrar, además de los miembros del equipo:
  // ● Acumulativo de powerstats, agrupados por cada uno, es decir: suma total de intelligence,
  // strength, etc. de todos los miembros individuales del equipo.
  // ● El powerstat que más acumulativo tenga debería aparecer arriba para categorizar el tipo
  // de equipo (inteligencia, fuerza, etc.).
  // ● Pesos y altura promedio del equipo.
  //
  // ● El equipo debe tener 6 miembros. Debe haber 3 miembros con orientación buena y 3 con
  // orientación mala. Esto debe validarse al intentar agregar un nuevo héroe.
  // ● Se deberá poder eliminar un miembro del equipo, lo que generará un nuevo promedio de
  // peso, acumulativo de powerstats, etc.

  let result2 = 0;
  teamHeros.forEach((item, i) => {
    const { powerstats } = item.response;
    result2 = result2 + parseInt(powerstats.combat) + parseInt(powerstats.durability) +
    parseInt(powerstats.intelligence) + parseInt(powerstats.power) + parseInt(powerstats.speed) +
    parseInt(powerstats.strength);
    console.log(result2);
  });


  // function summation() {
  //   let result = 0;
  //   data.forEach((item) => {
  //     result = result + item.powerstats;
  //   });
  //
  //
  //
  //   return result;
  // }

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
        handleSubmit={handleSubmit}/>
    );
  }
  return (
      <div>
        <h1 className= "text-center" style = {{ color: 'white' }}> TEAM </h1>
        <h4 className= "text-center" style = {{ color: 'white' }}> Sumatoria de Powerstats: {result2}</h4>
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
              />
        ))}
      </div>
    );
}

export default Team;
