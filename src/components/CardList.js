import React from "react";
import Card from './Card';

const CardList = ({pokemons}) => {
    return (
        <div>
            {
                pokemons.map(pokemon => {
                    return (
                        <Card 
                            key={pokemon.name}
                            id={pokemon.url.split('/')[6]} 
                            name={pokemon.name} 
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;