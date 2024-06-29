import { Link } from "react-router-dom"
import {FaStar} from 'react-icons/fa'
import * as S from "../../styles/MovieCard.style"

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({ movie, custonClass, showLink = true }) => {
  return (
    <S.MovieCardStyle className={custonClass}>
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </S.MovieCardStyle>
  )
}

export default MovieCard