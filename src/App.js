import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Button from "./components/Button/Button";
import Pokemon from "./components/Pokemon/Pokemon";

function App() {
  const [page, setPage] = useState(null);

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
              <Button
                type="button"
                disabled={page === 0}
                action={previousPage}
                text="Vorige"
              />

              <Button
                type="button"
                disabled={page === 57}
                action={nextPage}
                text="Volgende"
              />
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
