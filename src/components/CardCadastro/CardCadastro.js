import React from 'react'

const CardCadastro = (props) => {
    return (
        <div className='flex flex-col bg-white'>
            <div className='text-center text-xl'>{props.titulo}</div>
            <div><img src={props.imagem} alt={props.titulo} className="w-full" /></div>
        </div>
    )
}

export default CardCadastro
