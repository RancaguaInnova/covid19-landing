import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
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
        <div className='health-item'>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={service.idx}>
                    <div className='row'>
                        <div className='col-10 p-2'>
                            <h5 className={`mb-1 text-left`}>{service.name}</h5>
                        </div>
                        <div className='col-2 p-2 text-right'>
                            <FontAwesomeIcon icon={active ? faSortUp : faSortDown} size={'1x'} className='arrow-icon' />
                        </div>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={service.idx}>
                    <Card.Body>
                        <div className='list-body'>
                            <p className='mb-1'>
                                <a
                                    href={`http://www.google.com/maps/place/${service.contactInformation.address
                                        .latitude},${service.contactInformation.address.longitude}`}
                                    target='_blank'
                                >
                                    <FontAwesomeIcon icon={faMapMarker} />{' '}
                                    {service.contactInformation.address.streetName}{' '}
                                    {service.contactInformation.address.number || ''},{' '}
                                    {service.contactInformation.address.city}
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
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </div>
    )
}

export default Service
