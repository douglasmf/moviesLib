import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import * as S from '../styles/MovieGrid.style'
import MovieCard from '../components/MovieCard/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <main>
        <S.Title>
          Resultados para: <span className='queryText'>{query}</span>
        </S.Title>
        <S.MoviesContainer>
            {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </S.MoviesContainer>
    </main>
  )
}

export default Search