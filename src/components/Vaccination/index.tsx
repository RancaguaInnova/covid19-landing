import React, { useState } from 'react'
import VaccinationItem from './VaccinationItem'

import './styles.scss'

const Vaccination: React.FC = () => {
    const [ more, setMore ] = useState(false)
    return (
        <div className='vaccination'>
            <h3 className='pb-2'>Vacuna Influenza</h3>
            <h5>¿Quiénes deben vacunarse contra la influenza en nuestros CESFAM?</h5>

            <img className='img-fluid' src='/assets/images/influenza.png' />

            <h5 className='pt-2 pb-2'>Listado de vacunatorios habilitados</h5>
            {/* <h5 className='hash'>#saludRancagua</h5> */}
            <div className='pl-2 pr-2'>
                <div className='list-group '>
                    <VaccinationItem />
                    <VaccinationItem />
                    <VaccinationItem />
                </div>
            </div>

            <div className='m-2'>
                <button
                    className='btn btn-block btn-outline-danger'
                    onClick={() => {
                        setMore(!more)
                    }}
                >
                    {more ? 'Mostrar menos' : 'Mostrar todos'}
                </button>
            </div>
        </div>
    )
}

export default Vaccination
