import React from 'react'
import './Banner.css'
import '../App.css'

function Banner({title, text, container}) {
    return (
        <div className={container}>
            <div className="bann-container">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Banner
