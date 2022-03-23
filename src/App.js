import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Pokemon from "./components/Pokemon/Pokemon";
import Button from "./components/Button/Button";

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
      <main>
          <div className="buttons">
              <Button
                type="button"
                disabled={pokemon && !pokemon.previous}
                action={() => setPage(pokemon.previous)}
                text="Previous"
              />

              <Button
                  type="button"
                  disabled={pokemon && !pokemon.next}
                  action={() => setPage(pokemon.next)}
                  text="Next"
              />
          </div>

          <div className="pokemon">
              {pokemon && pokemon.results.map((card) => {
                  return <Pokemon name={card.name}/>
              })}
          </div>
      </main>
  );
}

export default App;
