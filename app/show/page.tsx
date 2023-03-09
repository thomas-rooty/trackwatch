'use client';
import styles from './show.module.css';
import Sidebar from "@/components/sidebar/Sidebar";
import {useSearchParams} from 'next/navigation';
import {useEffect} from "react";
import {useMovieStore} from "@/stores/show";
import ShowHeader from "@/components/show/ShowHeader";
import ShowDesc from '@/components/show/ShowDesc';
import ShowContent from '@/components/show/ShowContent';

const MovieDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

  // Get store values
  const show = useMovieStore(state => state.show)
  const setShow = useMovieStore(state => state.setShow)
  const isLoaded = useMovieStore(state => state.isLoaded)
  const setIsLoaded = useMovieStore(state => state.setIsLoaded)

  // fetch movie details
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setShow(data)
        console.log(data)
        setIsLoaded(true)
      })
  }, [TMDB_API_KEY, id, setIsLoaded, setShow])

  return (
    isLoaded &&
    <div className={styles.container}>
      <Sidebar/>
      <ShowHeader show={show}/>
      <ShowDesc show={show}/>
      <ShowContent show={show}/>
    </div>
  );
};

export default MovieDetails;
