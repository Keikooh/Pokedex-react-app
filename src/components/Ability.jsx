import React from 'react'

// Import styles
import '../styles/Abilities.styles.css'

const Ability = ({name, slot}) => {
  return (
    <div className='ability'>
        <p>name: {name}</p>
        <p>slot: {slot}</p>
    </div>
  )
}

export default Ability