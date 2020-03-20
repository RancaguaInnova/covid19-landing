import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp, faMapMarker, faPhone, faClock, faAmbulance } from '@fortawesome/free-solid-svg-icons'

/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons' */

import './styles.scss'

type VaccinationProp = {
    service: any
    current: any
    onSelect?: any
}
const VaccinationItem: React.FC<VaccinationProp> = ({ service, current, onSelect }) => {
    const mapsUrl = 'https://maps.google.com/?'
    const location =
        service.address && service.address.latitude
            ? `${mapsUrl}ll=${service.latitude},${service.longitude}`
            : `${mapsUrl}q=${service.complete_address}`
    return (
        <div className='vaccination-item'>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={service.idx} onClick={() => onSelect(service.idx)}>
                    <div className='row'>
                        <div className='col-10 p-2'>
                            <h5 className={`mb-1 text-left`}>{service.name_place}</h5>
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
                                <a href={location} target='_blank' className='btn btn-block btn-outline-link text-left'>
                                    <FontAwesomeIcon icon={faMapMarker} /> {service.complete_address}
                                </a>
                            </p>

                            {service.phone && (
                                <p>
                                    <a
                                        href={`Tel:${service.phone}`}
                                        className='btn btn-block btn-outline-link text-left'
                                    >
                                        <FontAwesomeIcon icon={faPhone} /> {service.phone}
                                    </a>
                                </p>
                            )}

                            {service.businessHours &&
                            service.businessHours.trim() !== '' && (
                                <p>
                                    <button className='btn btn-block btn-outline-link text-left'>
                                        <FontAwesomeIcon icon={faClock} /> {service.businessHours}
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

export default VaccinationItem
