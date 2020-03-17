import React from 'react'
import './styles.scss'

const Order: React.FC = () => {
    return (
        <div className='order'>
            <h3>Medidas - Fase 4</h3>
            <h5 className='hash'>#fase4rancagua</h5>
            <p className='info-txt'>Medidas adoptadas a nivel Comunal por Fase 4 de COVID-19</p>

            <ul className='list-group list-group-flush text-left'>
                <li className='list-group-item'>1. Cierre Establecimientos educacionales en toda la comuna</li>
                <li className='list-group-item'>2. Cierre Recintos deportivos en toda la comuna</li>
                <li className='list-group-item'>3. Otra medida adoptada por el municipio/gobierno</li>
            </ul>
        </div>
    )
}

export default Order
