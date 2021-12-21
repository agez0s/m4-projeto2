import React from 'react'

const CardProfile = (props) => {
    return (
        <div className='flex flex-col'>
        <div><img src={props.imagem} alt={props.titulo} className="w-full" /></div>
    </div>    )
}

export default CardProfile
