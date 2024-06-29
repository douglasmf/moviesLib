import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import * as S from '../styles/Home.style';

const apiUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [movie, setMovie] = useState(null);

  const getRandomMovie = async () => {
    const randomId = Math.floor(Math.random() * 10000);
    const movieUrl = `${apiUrl}${randomId}?language=pt-BR&${apiKey}`;

    try {
      const res = await fetch(movieUrl);
      const data = await res.json();
      
      if (data && data.id) {
        setMovie(data);
      } else {
        getRandomMovie();
      }
    } catch (error) {
      console.error("Error fetching the random movie:", error);
      getRandomMovie();
    }
  };

  useEffect(() => {
    getRandomMovie();
  }, []);
  return (
    <main>
        {movie && (
        <S.HomeContainer>
          <MovieCard movie={movie} showLink={true} custonClass="movie" />
        </S.HomeContainer>
        )}
    </main>
  )
}

export default Home