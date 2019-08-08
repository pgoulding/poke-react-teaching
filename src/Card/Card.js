import React from 'react'

const Card = ({bulbasaur, handleNextPokemon}) => {
  return (
    <article style={styling} className='pokemon-card'>
      <h2>{bulbasaur.name}</h2>
      {bulbasaur.image && <img src={bulbasaur.image} alt={bulbasaur.name}/>}
      <button onClick={() => handleNextPokemon(bulbasaur.id+1)}>next</button>
    </article>
  )
}

const styling = {
  'backgroundColor': 'papayawhip'
}

export default Card