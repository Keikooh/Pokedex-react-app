import React from 'react'
import Ability from './Ability.jsx';

// Import styles
import '../styles/Card.styles.css';

const Card = ({id, sprite, name, weight, height, abilities}) => {

  return (
    <div className='info-card'>
        <h3>{name}</h3>
        <img src={sprite}/>
        <p>id: {id}</p>
        <p>weight: {weight}</p>
        <p>height: {height}</p>
        <div className='abilities-container'>
            <h4>Abilities</h4>
            { abilities.map((item)=>( <Ability name={item.ability.name} slot={item.slot}/>)) }
        </div>
        
    </div>
  )
}

export default Card