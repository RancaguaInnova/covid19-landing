import React from 'react'
import VaccinationItem from './VaccinationItem'

import './styles.scss'

const Vaccination: React.FC = () => {
    return (
        <div className='vaccination'>
            <h3>Vacuna Influenza</h3>
            <img className='img-fluid' src='/assets/images/influenza.png' />

            <p className='info-txt'>Lugares de vacunación Influenza</p>
            {/* <h5 className='hash'>#saludRancagua</h5> */}
            <div className='pl-2 pr-2'>
                <div className='list-group '>
                    <VaccinationItem />
                    <VaccinationItem />
                    <VaccinationItem />
                </div>
            </div>

            <div className='m-2'>
                <button className='btn btn-block btn-outline-danger'>Mostrar todo</button>
            </div>
        </div>
    )
}

export default Vaccination
