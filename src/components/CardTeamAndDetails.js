import { useState } from 'react';
import CardTeam from './cardTeam';

function CardTeamAndDetails({ name, image, powerstats, combat, durability, intelligence, power, speed, strength }) {

  const [renderDetails, setRenderDetails] = useState(true);

  const handleSubmit = (e, bool) => {
    e.preventDefault();
    setRenderDetails(!renderDetails);
  };

  return (
    <div>
      <form onClick = {handleSubmit}>
        {renderDetails ?
          <CardTeam
          name = {name}
          image = {image}
          combat = {combat}
          durability = {durability}
          intelligence = {intelligence}
          power = {power}
          speed = {speed}
          strength = {strength}
          />
          : 'details click'}
      </form>
     </div>
  );
}
// <button onClick={() => setRenderDetails(!renderDetails)}>Details</button>


export default CardTeamAndDetails;
