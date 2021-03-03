import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Servicios</h1>
            <p className='desc'>El planear un viaje puede ser abrumador algunas veces, y ser un poco difícil escoger entre las muchas actividades, lugares, experiencias y servicios disponibles para el viajero curioso.</p>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={process.env.PUBLIC_URL + '/images/philippe-dehaye-S2RoRghC6pM-unsplash.jpg'}
                        text='Encuentre todas las opciones de hospedaje alrededor de todo el territorio costarricense.'
                        label='Hospedaje'
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL + '/images/josue-isai-ramos-figueroa-n2NBgIx3A28-unsplash.jpg'}
                        text='Relájese y deje que personas especialistas organicen las vacaciones que tanto desea darse.'
                        label='Agencias de Viajes'
                        />
                    </ul>
                </div>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={process.env.PUBLIC_URL + '/images/taylor-franz-GJogrGZxKJE-unsplash.jpg'}
                        text='Deleitese con los diferentes platillos y comidas típicas de Costa Rica.'
                        label='Restaurantes'
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL + '/images/pexels-picjumbocom-461077.jpg'}
                        text='Encuentre aquí los itinerarios que sugerimos para cualquier tipo de viaje.'
                        label='Itinerarios'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards