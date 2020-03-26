import React from 'react'
import ReactGA from 'react-ga'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './styles.scss'

const EmergencyNumbers: React.FC = () => {
    return (
        <div className='emergency-numbers p-2'>
            <h3 className='text-uppercase'>Consultas sobre servicios municipales</h3>
            <p>Se han dispuesto los siguientes contactos de emergencia (de 08:00 a 17:30 hrs)</p>
            <div className='emergency-box  '>
                <p className='text-center'>
                    <a
                        onClick={() => {
                            ReactGA.event({
                                category: 'emergency-call',
                                action: 'tel:800100020'
                            })
                        }}
                        href={`Tel:800100020`}
                        target='_blank'
                        className='btn btn-block btn-outline-link text-center'
                    >
                        <FontAwesomeIcon icon={faHeadset} className='health-icon' /> Call Center <b>800 100 020</b>
                    </a>
                </p>
                <p className='text-center'>
                    <a
                        onClick={() => {
                            ReactGA.event({
                                category: 'emergency-whatsapp',
                                action: 'tel:800100020'
                            })
                        }}
                        href={`https://wa.me/56956478170`}
                        target='_blank'
                        className='btn btn-block btn-outline-link text-center'
                    >
                        <FontAwesomeIcon icon={faWhatsapp} className='health-icon' /> WhatsApp <b>+56956478170</b>
                    </a>
                </p>
                <p className='text-center'>
                    <a
                        onClick={() => {
                            ReactGA.event({
                                category: 'emergency-email',
                                action: 'tel:800100020'
                            })
                        }}
                        href={`mailto:emergencia@rancagua.cl`}
                        target='_blank'
                        className='btn btn-block btn-outline-link text-center'
                    >
                        <FontAwesomeIcon icon={faEnvelope} className='health-icon' /> Email {' '}
                        <b>emergencia@rancagua.cl</b>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default EmergencyNumbers
