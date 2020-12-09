import '../../App.css'
import React from 'react'
import Banner from '../Banner'
import CardsInicio from '../CardsInicio'

function Inicio() {
    return (
        <div>
           <Banner 
           title='¿Viajando a Costa Rica?' 
           text='Descubre las actividades y servicios para tu viaje'
           container= 'banner-inicio' />
           <CardsInicio /> 
        </div>
    )
}

export default Inicio
