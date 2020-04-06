import React, { useState } from 'react'
import ReactGA from 'react-ga'

import './styles.scss'
import { Modal, Container, Button } from 'react-bootstrap'

function ModalDirectory(props: any) {
    return (
        <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton className=' Directory-title'>
                <Modal.Title id='contained-modal-title-vcenter' className='modal-title'>
                    Directorio Municipal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                <iframe
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: '0' }}
          src="https://webviews.smartrancagua.com/view/information/directoryView?_id=n5sAdCgr9hzqLWohz"
          allowFullScreen
          title="Mapa de contingencia"
         
        />
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

export default ModalDirectory
