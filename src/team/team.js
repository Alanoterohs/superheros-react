import { useState, useEffect } from 'react';
import { addTeam } from '../utils/axiosReq';
import CardTeamAndDetails from '../components/CardTeamAndDetails';

function Team({ idHero }) {

  const [teamHeros, setTeamHeros] = useState([]);

  useEffect(() => {
    addTeam(idHero).then(response => {
        if (response.name == undefined) {
          return true;
        }
        console.log(response);
        setTeamHeros([...teamHeros, {
                response,
              },
            ]
          );
        console.log(teamHeros);
      });
  }, [idHero]);


  return (
      <div>
        {teamHeros.map((heros, index) => (
          <div key= {index}>
            <CardTeamAndDetails
              name = {heros.response.name}
              image = {heros.response}
              combat = {heros.response.powerstats.combat}
              durability = {heros.response.powerstats.durability}
              intelligence = {heros.response.powerstats.intelligence}
              power = {heros.response.powerstats.power}
              speed = {heros.response.powerstats.speed}
              strength = {heros.response.powerstats.strength}
              />
          </div>
        ))}
      </div>
    );
}

export default Team;
