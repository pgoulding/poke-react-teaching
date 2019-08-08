import React from 'react'
import Card from '../Card/Card'

export const CardContainer = props => {

  return (

    <Card bulbasaur={props.pokemon} handleNextPokemon={props.handleNextPokemon}/>
  ) 
  
}

export default CardContainer