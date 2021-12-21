import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";

import { BsQuestionOctagonFill } from "react-icons/bs";
import Assistiu from "../../components/Assistiu/Assistiu";

const Movie = () => {
  const location = useLocation();
  const filme = location.state;
  let generos = "";
  let elenco = "";
  for (const genre of filme.genres) {
    if (filme.genres.indexOf(genre) === 0) {
      generos = genre;
    } else {
      generos = generos + ", " + genre.toLowerCase();
    }
  }
  for (const artista of filme.cast) {
    if (filme.cast.indexOf(artista) === 0) {
      elenco = artista;
    } else {
      elenco = elenco + ", " + artista;
    }
  }

  const [logado, setLogado] = useState(false);
  useEffect(() => {
    const itemStr = localStorage.getItem("token");
    if (!itemStr) {
      setLogado(false);
    } else {
      const item = JSON.parse(itemStr);
      const now = new Date();
      if (now.getTime() > item.expira) {
        localStorage.removeItem("token");
        setLogado(false);
      } else {
        setLogado(true);
      }
    }
  }, [logado]);

  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto flex flex-col">
        <div className="flex justify-between">
          <div className="text-5xl p-4 text-justify">
            {filme.title} ({filme.year})
          </div>
            {logado ? (
              <Assistiu movie={filme} />
            ) : (
              <>
              <div className="text-4xl self-center flex items-center flex-col">
          
                <BsQuestionOctagonFill />
                <p className="my-1 text-center text-xs">Não está logado</p>
              </div></>
            )}
          
        </div>
        <div className="flex justify-around">
          <div className="text-xl flex w-1/2 flex-col text-center">
            <div className="mb-4 flex flex-col">
              <p>Elenco</p>
              <div className="flex max-w-full justify-evenly gap-4">
                {filme.cast.map((item) => (
                  <div key={item}> {item} </div>
                ))}
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <p>Gênero(s)</p>
              <div className="flex max-w-full justify-evenly gap-4">
                {filme.genres.map((item) => (
                  <div key={item}> {item} </div>
                ))}
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <p>Sinopse</p>
              <p className="text-justify">{filme.resume}</p>
            </div>
          </div>
          <div>
            <img
              src={filme.cover}
              alt={filme.title}
              className="max-w-xs rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
