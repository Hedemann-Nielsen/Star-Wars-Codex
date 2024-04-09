
import React, { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import { useQuery } from '@tanstack/react-query';
import { request } from 'graphql-request';
import { AllFilms } from '../../components/AllFilms';
import { Footer } from '../../components/Footer';

export const Home = () => {
  const baseurl = 'https://swapi-graphql.netlify.app/.netlify/functions/index';
  const { data: Films, isLoading, error } = useQuery({queryKey: ["allFilms"], queryFn: async () => request(baseurl, AllFilms)});
  const [selectedFilm, setSelectedFilm] = useState();

  const handleFilmClick = (film) => {
    setSelectedFilm(film);
  };
  
  useEffect(() => {
    if (selectedFilm) {
    console.log(selectedFilm);
  }
}, [selectedFilm]);

  if (isLoading) {
    return <p>Loading......</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <main className="h-screen p-9 justify-center text-center bg-gradient-to-b from-[#130f40] to-black">
        <h1 className="text-white text-4xl font-bold p-9">Alle Star wars film</h1>
        {Films?.allFilms?.films.map((film, index) => (
          <div 
            key={index} 
            onClick={() => handleFilmClick(film)}>
            <h5 className='text-white cursor-pointer'>{film.title}</h5>
          </div>
        ))}
      </main>
      {selectedFilm && <Modal film={selectedFilm} onClose={() => setSelectedFilm()} />}

      <Footer />
    

    </>
  );
};