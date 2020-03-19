import React from 'react'
import './styles.scss'

const Map: React.FC = () => {
    return (
        <div className='map'>
            <h3 className='text-uppercase'>Mapa de Contingencia</h3>
            <p className='info-txt'>Información sobre puntos de interés reelevantes para la ciudadanía.</p>
            <div className='map-box'>
                <iframe
                    width='100%'
                    height='450'
                    frameBorder='0'
                    style={{ border: '0' }}
                    src='https://www.google.com/maps/d/u/0/embed?mid=1ESOtdzlMkDyO-6B6JTQUw3t__PmnUgrZ&z=14&ll=-34.1634639999931%2C-70.73531887955562'
                    allowFullScreen
                />
            </div>
        </div>
    )
}

export default Map
