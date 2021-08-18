import React, { useEffect, useState } from 'react';
import { searchByName } from '../utils/axiosReq';
import CardHero from '../components/CardHero';
import Team from '../team/team';

function Home() {
  const [heros, setHeros] = useState([]);
  const [name, setName] = useState('');
  const [idHero, setIdHero] = useState('');

  useEffect(() => {
    searchByName(name).then(response => {
      if (response.data.error) {
        return true;
      } else {
        const data = [response.data.results];
        setHeros(...data);
      }
    });
  }, [name]);

  return (
    <div className="container text-center" style= {{ backgroundColor: '#161B22' }}>
          <form className= "text-center" onSubmit= {(e) => e.preventDefault()}>
            <input
              placeholder= 'search hero'
              value= {name}
              onChange= {(e) => setName(e.target.value)}
              />
          </form>
          {heros.map((data, index) => (
                  <CardHero
                    key = {index}
                    id = {data.id}
                    name = {data.name}
                    image = {data.image.url}
                    setIdHero = {setIdHero}
                    />
          ))}
      <div>
        <h1
          className= "text-center"
          style = {{ color: 'grey' }}
          >
          TEAM</h1>
        <Team
          idHero = {idHero}
          />
      </div>
    </div>
  );
}

export default Home;
