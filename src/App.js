import React from 'react';
import logo from './logo.svg';
import CardContainer from './cardContainer/CardContainer'
import './App.css';
import SearchForm from './SearchFolder/SearchForm';

class App extends React.Component {
    constructor() {
      super();
      this.state ={
        data: {}
      }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then(response => response.json())
      .then(data => this.cleaner(data))
      .then(cleanedData => this.setState({data: cleanedData}))
      .catch(error => this.setState({error: error.message}))
  }

  handleNextPokemon = (id)  =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => this.cleaner(data))
      .then(cleanedData => this.setState({data: cleanedData}))
      .catch(error => this.setState({error}))
  }

  cleaner =(pokemon) =>{
    return {
      id: pokemon.id,
      name:pokemon.name,
      image: pokemon.sprites.front_default,
      height: pokemon.height,
      weight: pokemon.weight
    }
  }

  render() {
    return (
      <div className="App">
        <SearchForm handleNextPokemon={this.handleNextPokemon}/>
        <CardContainer pokemon={this.state.data} handleNextPokemon={this.handleNextPokemon}/>
      </div>
  );
  }
}


export default App;
