import React from 'react'
import HealtItem from './HealtItem'

import './styles.scss'

const Suggestions: React.FC = () => {
    return (
        <div className='suggestions'>
            <h3>Servicios de Salud</h3>
            <p className='info-txt'>Listado de centros de salud de CORMUN y su estado de operación</p>
            {/* <h5 className='hash'>#saludRancagua</h5> */}
            <div className='pl-2 pr-2'>
                <div className='list-group '>
                    <HealtItem />
                    <HealtItem />
                    <HealtItem />
                </div>
            </div>

            <div className='m-2'>
                <button className='btn btn-block btn-outline-danger'>Mostrar todo</button>
            </div>
        </div>
    )
}

export default Suggestions
