import React, { Component } from 'react'

export class SearchForm extends Component {
  constructor() {
    super()
    this.state={
      search:'',
    }
  }

  handleChange =(e)=> {
    this.setState({[e.target.name]: e.target.value})
  }

handlePokemon (e) { 
  e.preventDefault()
  this.props.handleNextPokemon(this.state.search)
  this.setState({ search:'' })
}

  render() {
    return (
      <form>
        <input
          name="search"
          value={this.state.search}
          placeholder="Type Pokemon Name Here"
          onChange={this.handleChange}
        />
        <button 
        onClick={(e)=> this.handlePokemon(e)}
        >Search</button>
        {/* <input
          name="name"
          value={this.state.name}
          placeholder="Type Pokemon Name Here"
          onChange={this.handleChange}
        /> */}
      </form>
    )
  }
}

export default SearchForm

