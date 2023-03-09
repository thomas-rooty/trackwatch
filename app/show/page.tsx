'use client';
import styles from './show.module.css';
import Sidebar from "@/components/sidebar/Sidebar";
import {useSearchParams} from 'next/navigation';
import {useEffect} from "react";
import {useMovieStore} from "@/stores/movie";
import MovieHeader from "@/components/show/MovieHeader";
import MovieDesc from '@/components/show/MovieDesc';

const MovieDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Get store values
  const movie = useMovieStore(state => state.movie)
  const setMovie = useMovieStore(state => state.setMovie)
  const isLoaded = useMovieStore(state => state.isLoaded)
  const setIsLoaded = useMovieStore(state => state.setIsLoaded)

  // fetch movie details
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setMovie(data)
        console.log(data)
        setIsLoaded(true)
      })
  }, [TMDB_API_KEY, id, setIsLoaded, setMovie])

  return (
    isLoaded &&
    <div className={styles.container}>
      <Sidebar/>
      <MovieHeader movie={movie}/>
      <MovieDesc movie={movie}/>
    </div>
  );
};

export default MovieDetails;
