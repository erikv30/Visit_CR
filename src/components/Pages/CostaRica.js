import '../../App.css'
import React from 'react'
import Banner from '../Banner'
import CardsCostaRica from '../CardsCostaRica'

function CostaRica() {
    return (
        <div>
           <Banner 
           title='Sobre Costa Rica' 
           container= 'banner-costarica' />
           <CardsCostaRica /> 
        </div>
    )
}

export default CostaRica