import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import background from '../images/bg.jpg';

class App extends Component {
    constructor(){
        super();
        this.state = {
            species: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => response.json())
            .then(response => this.setState({species:response.results}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value});
    }
    
    render(){
        const filteredSpecies = this.state.species.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <div className='background-image' style={{backgroundImage:`url(${background})`}}>
                    <h1 className='poke-api'>Pokédex</h1>
                </div>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList pokemons={filteredSpecies}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;