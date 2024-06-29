import {useState, useEffect} from 'react'
import * as S from '../styles/MovieGrid.style'
import MovieCard from '../components/MovieCard/MovieCard'

const apiUrl = import.meta.env.VITE_API_BASE
const apiKey = import.meta.env.VITE_API_KEY

const MainContent = (props) => {
  const [movies,SetMovies] = useState([]) 

  const getMovies = async (url) => {
    
    const res = await fetch(url)   // pegando os dados da url da API
    const data = await res.json()  // transformando os dados em formato json 

    SetMovies(data.results) // pegando apenas o array results
  }

  useEffect(() => {
    const moviesUrl = `${apiUrl + props.urlCategoria}language=pt-BR&${apiKey}`;
    getMovies(moviesUrl)

  },[])
  return (
    <main>
        <S.Title>
          {props.title}
        </S.Title>
        <S.MoviesContainer>
            {movies === 0 && <p>Carregando...</p>}
            {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </S.MoviesContainer>
    </main>
  )
}

export default MainContent