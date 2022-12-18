
import React, {useEffect, useState} from 'react';
import Card from './components/Card.jsx';
import {List} from './services/poke.services.js';

const App = () => {
  
  const [data, setdata] = useState("");

  const getData = async () => {
    const result = await List("eevee");
    setdata(result);
    
  }

  useEffect(() => {
    getData();
  }, [])
  

  return ( 
    <div>

      <Card 
        name={data.name} 
        sprite={data.sprites.front_default}
        id={data.id} 
        weight={data.weight} 
        height={data.height} 
        abilities={data.abilities}/>
    </div> 
    );
}

export default App
