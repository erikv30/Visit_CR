import '../../App.css'
import React from 'react'
import Banner from '../Banner'
import CardsActividades from '../CardsActividades'

function Actividades() {
    return (
        <div>
           <Banner 
           title='Actividades' 
           container= 'banner-actividades' />
           <CardsActividades /> 
        </div>
    )
}

export default Actividades