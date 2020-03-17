import React from 'react'
import './styles.scss'

const Order: React.FC = () => {
    return (
        <div className='order'>
            <h3>Medidas - Fase 4</h3>
            <h5 className='hash'>#fase4rancagua</h5>
            <img className='img-fluid' src='/assets/images/plan-minsal.png' />
            <p className='info-txt'>Medidas adoptadas a nivel Comunal por Fase 4 de COVID-19</p>

            <ul className='list-group list-group-flush text-left'>
                <li className='list-group-item'>1. Cierre Establecimientos educacionales en toda la comuna</li>
                <li className='list-group-item'>2. Cierre Recintos deportivos en toda la comuna</li>
            </ul>
            <div className='m-2'>
                <a
                    className='btn btn-block btn-outline-danger'
                    target='_blank'
                    href='https://www.minsal.cl/coronavirus-en-chile-pasa-a-fase-4-y-presidente-anuncia-cierre-de-fronteras/'
                >
                    Ver medidas MINSAL
                </a>
            </div>
        </div>
    )
}

export default Order
