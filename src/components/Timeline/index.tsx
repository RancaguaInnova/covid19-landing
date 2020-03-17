import React from 'react'
import Card from './CardTimeline'
import './styles.scss'

const Timeline: React.FC = () => {
    return (
        <div className='timeline'>
            <h3>Último minuto</h3>
            <h4>#covid19rancagua</h4>
            <hr />
            <div className='timeline-box overflow-auto'>
                <Card />
                <Card />
                <Card />
                <div className='view-more-box'>
                    <button className='btn btn-block btn-outline-link'>Cargar más...</button>
                </div>
            </div>
            <div className='m-2'>
                <button className='btn btn-block btn-outline-danger'>Actualizar</button>
            </div>
        </div>
    )
}

export default Timeline
