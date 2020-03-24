import React, { useState } from 'react'
import './styles.scss'
import { Modal, Container, Row, Col, Button } from 'react-bootstrap'
import { MdLocalPhone, MdEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

function ModalInformation(props: any) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton className=" information-title">
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          #quedateencasa
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={12}>
              La Municipalidad de Rancagua habilitó los siguientes medios de
              contacto para consultas sobre servicios municipales:
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col md={12}>
              <MdLocalPhone></MdLocalPhone> Linea 800 gratuita:{' '}
              <a href="tel:800100020">800100020</a>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FaWhatsapp></FaWhatsapp> WhatsApp:{' '}
              <a href="https://wa.me/56956478170">+56956478170</a>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <MdEmail></MdEmail> Correo:{' '}
              <a href="mailto:emergencia@rancagua.cl">emergencia@rancagua.cl</a>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const Information: React.FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false)

  const showModal = (action: any) => {
    setModalShow(true)
  }

  return (
    <div className="Information">
      <a className="flotante" href="#" onClick={showModal}>
        <img
          src="assets/images/information.png"
          width={64}
          alt=""
          className="img-flotante"
        />
      </a>

      <ModalInformation show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default Information
