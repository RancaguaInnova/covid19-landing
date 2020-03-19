import React from 'react'
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons' */

import './styles.scss'

type VaccinationProp = {
    service: any
}
const VaccinationItem: React.FC<VaccinationProp> = ({ service }) => {
    return (
        <li className='list-group-item list-group-item-action text-left'>
            <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>
                    {service.name_place}
                    {/* <span className='float-right'>
                        <FontAwesomeIcon icon={faPhone} />
                    </span> */}
                </h5>
                {/*  <small>3 days ago</small> */}
            </div>
            <p className='mb-1 font-weight-bold'>{service.complete_address}</p>
            <p>
                <small>{service.businessHours}</small>
            </p>
        </li>
    )
}

export default VaccinationItem
