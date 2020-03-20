import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp, faMapMarker, faPhone, faClock, faAmbulance } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'
type ServiceProps = {
    service: any
    current: any
    onSelect?: any
}
const Service: React.FC<ServiceProps> = ({ service, current, onSelect }) => {
    return (
        <div className='health-item'>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={service.idx} onClick={() => onSelect(service.idx)}>
                    <div className='row'>
                        <div className='col-10 p-2'>
                            <h5 className={`mb-1 text-left`}>{service.name}</h5>
                        </div>
                        <div className='col-2 p-2 text-right'>
                            <FontAwesomeIcon
                                icon={current === service.idx ? faSortUp : faSortDown}
                                size={'1x'}
                                className='arrow-icon'
                            />
                        </div>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={service.idx}>
                    <Card.Body>
                        <div className='list-body'>
                            <p>
                                <a
                                    href={`http://www.google.com/maps/place/${service.contactInformation.address
                                        .latitude},${service.contactInformation.address.longitude}`}
                                    target='_blank'
                                    className='btn btn-block btn-outline-link text-left'
                                >
                                    <FontAwesomeIcon icon={faMapMarker} className='health-icon' />{' '}
                                    {service.contactInformation.address.streetName}{' '}
                                    {service.contactInformation.address.number || ''},{' '}
                                    {service.contactInformation.address.city}
                                </a>
                            </p>
                            {service.contactInformation &&
                            service.contactInformation.phone && (
                                <p>
                                    <a
                                        href={`Tel:${service.contactInformation.phone.number}`}
                                        className='btn btn-block btn-outline-link text-left'
                                    >
                                        <FontAwesomeIcon icon={faPhone} className='health-icon' />{' '}
                                        {service.contactInformation.phone.number}
                                    </a>
                                </p>
                            )}

                            {service.businessHours && (
                                <p>
                                    <button className='btn btn-block btn-outline-link text-left'>
                                        <FontAwesomeIcon icon={faClock} className='health-icon' />{' '}
                                        {service.businessHours}
                                    </button>
                                </p>
                            )}

                            {service.businessHoursSapu &&
                            service.businessHoursSapu.trim() !== '' && (
                                <p>
                                    <button className='btn btn-block btn-outline-link text-left'>
                                        <FontAwesomeIcon icon={faAmbulance} className='health-icon' /> SAPU{' '}
                                        {service.businessHoursSapu}
                                    </button>
                                </p>
                            )}
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </div>
    )
}

export default Service
