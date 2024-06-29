import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'
import MovieCard from "../components/MovieCard/MovieCard"
import * as S from "../styles/Movie.style"

const apiUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-us", {
      style: "currency",
      currency: "USD"
    })
  }

  useEffect(() => {
    const movieUrl = `${apiUrl}${id}?language=pt-BR&${apiKey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div>
      {movie && (
        <S.MovieContainer>
          <MovieCard movie={movie} showLink={false} custonClass="movieCard" />
          <S.Tagline>{movie.tagline}</S.Tagline>
          <S.Info>
            <h3><BsWallet2/> Orçamento:</h3>
            <p>{formatCurrency(movie.budget)}</p>
          </S.Info>
          <S.Info>
            <h3><BsGraphUp/> Receita:</h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </S.Info>
          <S.Info>
            <h3><BsHourglassSplit/> Duração:</h3>
            <p>{movie.runtime} minutos</p>
          </S.Info>
          <S.InfoDescription>
            <h3><BsFillFileEarmarkTextFill/> Descrição:</h3>
            <p>{movie.overview}</p>
          </S.InfoDescription>
        </S.MovieContainer>
      )}
    </div>
  )
}

export default Movie