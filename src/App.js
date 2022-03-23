import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Pokemon from "./components/Pokemon/Pokemon";

function App() {
  const [page, setPage] = useState(0);

  const mainPage = 0;
  const lastPage = 57;

  function previousPage() {
      setPage(page - 20);
  }

  function nextPage() {
      setPage(page + 20);
  }

  useEffect(() => {
    async function fetchData() {
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`)

            console.log(result.data);

            setPage(result.data)

        } catch (e) {
            console.error(e);
        }
    }
    fetchData();

  }, [])

  return (
      <>
          <header>
              <h1>Pokémon</h1>
          </header>

          <div>
              <button
                type="button"
                disabled={page === mainPage}
                onClick={previousPage}
              >
                  Vorige
              </button>

              <button
                type="button"
                disabled={page === lastPage}
                onClick={nextPage}
              >
                  Volgende
              </button>
          </div>

          <div>
              {page && page.results.map((card) => {
                  return (
                      <article key={card.name}>
                        <Pokemon name={card.name}/>
                      </article>
                  )
              })}
          </div>
      </>
  );
}

export default App;
