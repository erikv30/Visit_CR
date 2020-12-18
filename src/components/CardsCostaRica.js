import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Bienvenidos a Costa Rica</h1>
            <h4>Costa Rica proporciona la combinación perfecta de relajación, aventura, cultura, buena cocina y fauna silvestre. Los visitantes encuentran en Costa Rica un paraíso de aventuras en el ambiente natural más bello y seguro. También es el hogar de cuatro sitios de Patrimonio Mundial certificada por la UNESCO.</h4>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={process.env.PUBLIC_URL + '/images/max-bottinger-Ffo-atdAfiQ-unsplash.jpg'}
                        text='Las provincias de Costa Rica y que se pude hacer en cada una de ellas.'
                        label='Provincias'
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL + '/images/juliana-barquero-ANTavf3QXvY-unsplash.jpg'}
                        text='Disfruta de los volcanes, las playas del Pacífico y del Caribe, los bosques tropicales secos, húmedos y lluviosos y los paisajes de las selvas.'
                        label='Parques Nacionales'
                        />
                         <CardItem 
                        src={process.env.PUBLIC_URL + '/images/samuel-charron-7C7jwyZnVlg-unsplash.jpg'}
                        text='Conozca el clima de las diferentes regiones del país.'
                        label='Clima'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards