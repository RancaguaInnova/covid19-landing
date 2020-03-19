import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'
type ServiceProps = {
    service: any
    active?: boolean
    onSelect?: any
}
const Service: React.FC<ServiceProps> = ({ service, active = false, onSelect }) => {
    console.log('active!', active, service)
    return (
        <button
            className='list-group-item list-group-item-action text-left services-item'
            onClick={() => onSelect(service)}
        >
            <div className='row d-flex w-100 justify-content-between'>
                <div className='col-10 p-0'>
                    <h5 className={`mb-1 text-left ${active ? 'font-weight-bold' : ''}`}>
                        {service.name}
                        {/* <span className='float-right'>
                        <FontAwesomeIcon icon={faPhone} />
                    </span> */}
                    </h5>
                </div>
                <div className='col-2 p-0 text-right'>
                    <FontAwesomeIcon icon={active ? faSortUp : faSortDown} size={'1x'} className='arrow-icon' />
                </div>

                {/*  <small>3 days ago</small> */}
            </div>
            {active && (
                <div className='list-body'>
                    <p className='mb-1'>
                        <a
                            href={`http://www.google.com/maps/place/${service.contactInformation.address
                                .latitude},${service.contactInformation.address.longitude}`}
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

                    {service.businessHours && <p>{service.businessHours}</p>}
                </div>
            )}
        </button>
    )
}

export default Service
