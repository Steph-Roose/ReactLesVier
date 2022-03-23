import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Pokemon from "./components/Pokemon/Pokemon";

function App() {
  const [page, setPage] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    async function fetchData() {
        try {
            const result = await axios.get(`${page}`)

            console.log(result.data);

            setPokemon(result.data)

        } catch (e) {
            console.error(e);
        }
    }
    fetchData();

  }, [page])

  return (
      <>
          <header>
              <h1>Pokémon</h1>
          </header>

          <div>
              <button
                type="button"
                onClick={() => setPage(pokemon.previous)}
              >
                  Vorige
              </button>

              <button
                type="button"
                onClick={() => setPage(pokemon.next)}
              >
                  Volgende
              </button>
          </div>

          <div>
              {pokemon && pokemon.results.map((card) => {
                  return <Pokemon name={card.name}/>
              })}
          </div>
      </>
  );
}

export default App;
