import React from 'react'

const CardCadastro = (props) => {
    return (
        <div className='flex flex-col'>
            <div className='text-center text-xl font-bold px-2'>{props.titulo}</div>
            <div><img src={props.imagem} alt={props.titulo} className="w-full" /></div>
        </div>
    )
}

export default CardCadastro
