import React, { useEffect, useState } from 'react';
import { searchByName } from '../utils/axiosReq';
import CardHero from '../components/CardHero';
import Team from '../team/team';
import SearchBar from '../components/SearchBar';

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

  const handleSubmit = (e, id, index) => {
    e.preventDefault();
    setIdHero(id);
    setName('');
    setHeros([]);
  };

  return (
    <div className="container text-center" style= {{ backgroundColor: '#161B22' }}>
          <SearchBar
            name = {name}
            setName = {setName}
            />
          {heros.map((data, index) => (
                  <CardHero
                    key = {index}
                    index = {index}
                    id = {data.id}
                    name = {data.name}
                    image = {data.image.url}
                    handleSubmit = {handleSubmit}
                    />
          ))}
          <div>
            <Team
              idHero = {idHero}
              />
          </div>
    </div>
  );
}

export default Home;
