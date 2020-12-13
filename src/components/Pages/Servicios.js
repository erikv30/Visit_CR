import '../../App.css'
import React from 'react'
import Banner from '../Banner'
import CardsServicios from '../CardsServicios'

function Servicios() {
    return (
        <div>
           <Banner 
           title='Servicios' 
           container= 'banner-servicios' />
           <CardsServicios /> 
        </div>
    )
}

export default Servicios