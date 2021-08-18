import { useState, useEffect } from 'react';
import { addTeam } from '../utils/axiosReq';
import CardTeam from '../components/cardTeam';
import CardDetails from '../components/CardDetails';

function Team({ idHero }) {

  const [teamHeros, setTeamHeros] = useState([]);
  const [renderDetails, setRenderDetails] = useState(false);

  useEffect(() => {
    addTeam(idHero).then(response => {
        console.log(response);
        if (response.name == undefined) {
          return true;
        }

        setTeamHeros([...teamHeros, {
                response,
              },
            ]
          );
      });
  }, [idHero]);

  const handleSubmit = (e, bool) => {
    e.preventDefault();
    setRenderDetails(!renderDetails);
  };

  if (renderDetails) {
    return teamHeros.map((heros, index) => (
      <CardDetails
        key = {index}
        name = {heros.response.name}
         height = {heros.response.appearance.height[1]}
         weight = {heros.response.appearance.weight[1]}
         aliases = {heros.response.biography.aliases[0]}
         eyes = {heros.response.appearance['eye-color']}
         hair = {heros.response.appearance['hair-color']}
         base = {heros.response.work.base}
        handleSubmit={handleSubmit}/>
    ));
  }

  return (
      <div>
        {teamHeros.map((heros, index) => (
          <div key= {index}>
            <CardTeam
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
          </div>
        ))}
      </div>
    );
}

export default Team;
