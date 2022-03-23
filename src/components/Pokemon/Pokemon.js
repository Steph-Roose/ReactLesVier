import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Pokemon.css';

function Pokemon({name}) {
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)

                console.log(result.data);

                setPokemon(result.data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [name])

    return (
        <div className="pokemon-card">
            {pokemon && <>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <p>Moves:
                    <span> {pokemon.moves.length}</span>
                </p>

                <p>Weight:
                    <span> {pokemon.weight}</span>
                </p>
                <p>Abilities:</p>
                <ul>
                    {pokemon.abilities.map((a) => {
                        return (
                            <li key={a.ability.name} className="ability-list">
                                {a.ability.name}
                            </li>
                        )})}
                </ul>
            </>
            }
        </div>
    );
}

export default Pokemon;