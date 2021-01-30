import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Actividades</h1>
            <p className='desc'>En Costa Rica encontrará muchas actividades estimulantes que toman lugar en el hábitat más verde y rodeado por fauna salvaje. Un paraíso para aquellos que buscan algo diferente: aventura, sol, playas, bosque, vida silvestre, bienestar y mucho más.</p>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={process.env.PUBLIC_URL + '/images/lindsay-loucel-OAZNaSaExlc-unsplash.jpg'}
                        text='Las playas de Costa Rica permite el disfrute de la playa como medio de esparcimiento, deporte y descanso.'
                        label='Sol y playa'
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL + '/images/pexels-jo-kassis-surf.jpg'}
                        text='Las playas de Costa Rica son reconocidas por sus olas y los torneos de surf.'
                        label='Surf'
                        />
                    </ul>
                </div>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={process.env.PUBLIC_URL + '/images/etienne-delorieux-ClmjVN1HZtE-unsplash.jpg'}
                        text='La flora y fauna, volcanes, caminatas, senderos, parques nacionales.'
                        label='Bosques'
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL + '/images/zdenek-machacek-XUFMiGkv-60-unsplash.jpg'}
                        text='Costa Rica es famosa entre los más reconocidos observadores de aves, con casi 850 especies de aves...'
                        label='Observación de Aves'
                        />
                    </ul>
                </div>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={process.env.PUBLIC_URL + '/images/pexels-mam-nc-2041759.jpg'}
                        text='Entre la variada oferta de actividades, que se pueden hacer esta: canopy, rafting, buceo, kayaking.'
                        label='Aventura'
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL + '/images/cristhian-carreno-RhmQYJPswxg-unsplash.jpg'}
                        text='Costa Rica posee las condiciones ideales para desintoxicarse del estrés y del ajetreo diario.'
                        label='Bienestar'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards