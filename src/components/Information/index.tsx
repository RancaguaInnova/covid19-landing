import React, { useState } from 'react'
import ReactGA from 'react-ga'

import './styles.scss'
import { Modal, Container, Row, Col, Button } from 'react-bootstrap'
import { MdLocalPhone, MdEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

function ModalInformation(props: any) {
    return (
        <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton className=' information-title'>
                <Modal.Title id='contained-modal-title-vcenter' className='modal-title'>
                    #quedateencasa
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col md={12}>
                            La Municipalidad de Rancagua habilitó los siguientes medios de contacto para consultas sobre
                            servicios municipales:
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={12}>
                            <MdLocalPhone /> Linea 800 gratuita:{' '}
                            <a
                                onClick={() => {
                                    ReactGA.event({
                                        category: 'information-call',
                                        action: 'tel:800100020'
                                    })
                                }}
                                href='tel:800100020'
                                target='_blank'
                            >
                                800100020
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <FaWhatsapp /> WhatsApp:{' '}
                            <a
                                onClick={() => {
                                    ReactGA.event({
                                        category: 'information-whatsapp',
                                        action: 'wa.me/56956478170'
                                    })
                                }}
                                href='https://wa.me/56956478170'
                                target='_blank'
                            >
                                +56956478170
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <MdEmail /> Correo:{' '}
                            <a
                                onClick={() => {
                                    ReactGA.event({
                                        category: 'information-email',
                                        action: 'mailto:emergencia@rancagua.cl'
                                    })
                                }}
                                href='mailto:emergencia@rancagua.cl'
                                target='_blank'
                            >
                                emergencia@rancagua.cl
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant='danger'>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const Information: React.FC = () => {
    const [ modalShow, setModalShow ] = useState<boolean>(false)

    const showModal = (action: any) => {
        ReactGA.modalview('informations')

        setModalShow(true)
    }

    return (
        <div className='Information'>
            <a className='flotante' href='#' onClick={showModal}>
                <img src='assets/images/information.png' width={64} alt='' className='img-flotante' />
            </a>

            <ModalInformation show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default Information
