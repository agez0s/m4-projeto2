import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardList = (props) => {
    const navigate = useNavigate()

    const openMovie = () => {
        navigate('/movie', { state: props.filme })
    }
    
    return (
        <div className='flex flex-col gap-2 cursor-pointer hover:shadow-2xl hover:bg-cyan-200 p-2 rounded-2xl' onClick={openMovie}>
            <div className='text-center text-xl font-bold px-2'>{props.filme.title}</div>
            <div className='justify-center flex'><img src={props.filme.cover} alt={props.filme.title} className="w-48" /></div>
        </div>
    )
}

export default CardList
