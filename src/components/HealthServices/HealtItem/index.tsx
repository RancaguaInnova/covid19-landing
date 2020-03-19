import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'
type ServiceProps = {
    service: any
}
const Service: React.FC<ServiceProps> = ({ service }) => {
    return (
        <li className='list-group-item list-group-item-action text-left'>
            <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>
                    {service.name}
                    {/* <span className='float-right'>
                        <FontAwesomeIcon icon={faPhone} />
                    </span> */}
                </h5>
                {/*  <small>3 days ago</small> */}
            </div>
            <p className='mb-1'>
                <a
                    href={`http://www.google.com/maps/place/${service.contactInformation.address.latitude},${service
                        .contactInformation.address.longitude}`}
                    target='_blank'
                >
                    <FontAwesomeIcon icon={faMapMarker} /> {service.contactInformation.address.streetName}{' '}
                    {service.contactInformation.address.number || ''}, {service.contactInformation.address.city}
                </a>
            </p>
            {service.contactInformation &&
            service.contactInformation.phone && (
                <a className='' href={`Tel:${service.contactInformation.phone.number}`}>
                    <FontAwesomeIcon icon={faPhone} /> {service.contactInformation.phone.number}
                </a>
            )}

            {service.businessHours && (
                <p className='text-center'>
                    <small>{service.businessHours}</small>
                </p>
            )}
        </li>
    )
}

export default Service
