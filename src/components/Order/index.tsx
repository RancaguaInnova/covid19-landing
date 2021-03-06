import React, { useEffect, useState } from 'react'
import ReactGA from 'react-ga'
import app from 'providers/firebase'
import { collectionData } from 'rxfire/firestore'
import _isEqual from 'lodash/isEqual'
import _sortBy from 'lodash/sortBy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Loading from 'components/Loading'
/* import { FirestoreCollection } from 'react-firestore' */
import { Modal, Container, Row, Col, Button } from 'react-bootstrap'
import './styles.scss'
import ReactPlayer from 'react-player'

function MydModalWithGrid(props: any) {
    return (
        <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter' className='modal-title'>
                    <b>
                        {props.action && props.action.description ? props.action.description.replace('[+] ', '') : ''}
                    </b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.action && props.action.urlVideo ? <ReactPlayer url={props.action.urlVideo} width='100%' /> : ''}
                {props.action && props.action.images && props.action.images.src ? (
                    <img src={props.action.images.src} width='100%' alt='' />
                ) : (
                    ''
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant='danger'>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const Order: React.FC = () => {
    const [ actions, setActions ] = useState<any[]>([])
    const [ action, setAction ] = useState<any>(null)

    const [ loading, setLoading ] = useState<boolean>(true)
    const [ modalShow, setModalShow ] = useState<boolean>(false)

    const showModal = (action: any) => {
        setAction(action)
        setModalShow(true)
    }

    useEffect(() => {
        var collectionRef = null
        async function getOrders() {
            const statusRef = app.firestore().collection('actions')
            collectionRef = collectionData(statusRef, 'id')

            collectionRef.subscribe((list: any = []) => {
                /* console.log('list', list) */
                // Prevent innecesary updates
                if (!_isEqual(list, actions)) {
                    setActions(list)
                    setLoading(false)
                }
            })
        }

        getOrders()
    })
    return (
        <div className='order'>
            <h3 className='text-uppercase'>Recomendaciones</h3>
            {/*  <h5 className='hash'>#fase4rancagua</h5> */}
            <hr />
            <img className='img-fluid' src='/assets/images/plan-minsal.png' />
            {/* <p className='info-txt'>Medidas adoptadas a nivel Comunal por Fase 4 de COVID-19</p> */}

            {loading ? (
                <Loading />
            ) : (
                <div className='m-2 text-left '>
                    <ul className='list-group pt-4 text-left'>
                        {_sortBy(actions.filter((a: any) => a.active), (a) => a.date.toDate())
                            .reverse()
                            .map((action, key) => (
                                <li
                                    key={key}
                                    onClick={() => {
                                        ReactGA.event({
                                            category: 'Recomendaciones',
                                            action: action.description
                                        })
                                        showModal(action)
                                    }}
                                    className='list-group-item list-group-item-action justify-content-center srv-item'
                                >
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        className='float-right justify-content-center'
                                    />
                                    <span className='pr-4 w-100'>
                                        {action && action.description ? action.description.replace('[+] ', '') : ''}
                                    </span>
                                </li>
                            ))}
                    </ul>
                </div>
            )}

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} action={action} />
            <div className='m-2 pt-4'>
                <a
                    className='btn btn-block btn-outline-danger text-uppercase'
                    target='_blank'
                    href='https://www.gob.cl/coronavirus/'
                >
                    Información oficial gob.cl
                </a>
            </div>
        </div>
    )
}

export default Order
