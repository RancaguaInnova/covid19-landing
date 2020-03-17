import React from 'react'
import HealtItem from './HealtItem'

import './styles.scss'

const Suggestions: React.FC = () => {
    return (
        <div className='suggestions'>
            <h3>Servicios de Salud</h3>
            <p className='info-txt'>Listado de centros de salud de CORMUN y su estado de operación</p>
            {/* <h5 className='hash'>#saludRancagua</h5> */}
            <div className='list-group'>
                <HealtItem />
            </div>
        </div>
    )
}

export default Suggestions
