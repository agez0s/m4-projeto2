import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import axios from 'axios';
import CardCadastro from '../../components/CardCadastro/CardCadastro'
import { Link } from 'react-router-dom';


const Home = () => {

    const [filmes, setFilmes] = useState([]);
    const [mount, setMount] = useState(false);

    const shuffleArray = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
    
        return array.slice(0, 5);
      };
    
      useEffect(() => {
        setMount(true);
        listFilmes();
      }, [mount]);
    
  
    const listFilmes = async () => {
      await axios.get("/movie/findMany").then((response) => {
        if (mount) {
          setFilmes(response.data);
          }
      });
    };

    return (
        <>
        <Header />
        <div className='mx-auto text-center'>
            <div className='text-6xl my-10'>Assista todos os filmes, em um só lugar!</div>
            <div className="flex flex-nowrap flex-row overflow-hidden items-end">
          { shuffleArray(filmes).map((item) => (
            <CardCadastro
              titulo={item.title}
              imagem={item.cover}
              key={item.id}
            />
          ))}
        </div>
        <div className='my-10 text-4xl'><Link to="/cadastro">Crie sua conta agora mesmo!</Link></div>
        </div>
        </>
        
    )
}

export default Home
