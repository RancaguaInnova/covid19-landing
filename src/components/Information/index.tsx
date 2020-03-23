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
          Comunicate con nosotros
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={12}>
              Llamandonos
              <a href="tel:+5690000000">
                {' '}
                <MdLocalPhone></MdLocalPhone>+5690000000
              </a>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              Consultas al wsp{' '}
              <a href="https://wa.me/5690000000">
                <FaWhatsapp></FaWhatsapp> +5690000000
              </a>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              Email{' '}
              <a href="mailto:emergencia@rancagua.cl">
                <MdEmail></MdEmail> emergencia@rancagua.cl
              </a>
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
