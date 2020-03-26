import React from 'react'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap'

const Unavailable: React.FC = () => {
    return (
        <div className='unavailable-services p-2'>
            <Row>
                <Col md={12}>
                    <h3 className='font-weight-bold'>SUSPENSIÓN DE SERVICIOS</h3>
                    <h4 className='font-weight-bold'>Suspensión Total</h4>
                    <div className='text-justify textservice pt-2'>
                        Para reducir al máximo la concentración de personas circulando en los servicios municipales la
                        Ilustre Municipalidad de Rancagua ha dispuesto que los siguientes servicio dejen de funcionar:
                    </div>
                    <ul className='lista pt-2'>
                        <li>
                            <span>Departamentos de Obras</span>
                        </li>
                        <li>
                            <span>Rentas</span>
                        </li>
                        <li>
                            <span>Tránsito</span>
                        </li>
                        <li>
                            <span>Los Juzgados de policía local 1 y 2</span>
                        </li>
                    </ul>
                </Col>
            </Row>
            {/* <hr /> */}
            <Row>
                <Col md={12}>
                    <h4 className='font-weight-bold'>Suspensíon Parcial</h4>
                    <div className='text-justify textservice pt-2'>
                        Sólo atenderán de manera presencial casos de urgencia.
                    </div>
                    <ul className='lista pt-2'>
                        <li>
                            <span>Dideco</span>
                        </li>
                        <li>
                            <span>Veterinaria</span>
                        </li>
                    </ul>
                </Col>
            </Row>
            <hr />

            <Row>
                <Col md={12}>
                    <h3 className='font-weight-bold text-center'>FUNCIONAMIENTO NORMAL DE SERVICIOS</h3>
                    <ul className='lista pt-2'>
                        <li>
                            <span>Entrega de agua rural</span>
                        </li>
                        <li>
                            <span>Sanitización de refugios y espacios públicos</span>
                        </li>
                        <li>
                            <span>Cuadrillas de emergencias</span>
                        </li>
                        <li>
                            <span>Retiro de basuras</span>
                        </li>
                    </ul>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col md={12}>
                    <h3 className='font-weight-bold text-center'>SERVICIOS DIGITALES</h3>
                    <div className='text-left textservice'>
                        De manera online se han dispuesto los siguientes servicios digitales:
                    </div>
                    <ul className='list-group pt-4 text-left'>
                        {onlineServices.map((srv, key) => (
                            <a
                                key={key}
                                href={srv.link}
                                target='_blank'
                                className='list-group-item list-group-item-action justify-content-center srv-item'
                            >
                                <FontAwesomeIcon icon={faChevronRight} className='float-right justify-content-center' />
                                <span className='pr-4 w-100'>{srv.name}</span>
                            </a>
                        ))}
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default Unavailable

const onlineServices = [
    {
        link: 'http://pago.smc.cl/pagopcvv2/muni/RANCAGUA.aspx',
        name: 'Pago de Permisos de Circulación (PCV)'
    },
    {
        link: 'http://appl.smc.cl/PCV/ConsultaRMNP/frmCalculoPCV.aspx?COMUNA:RANCAGUA',
        name: 'Consultar valor PCV'
    },
    {
        link: 'http://appl.smc.cl/pagopc/muni/rancagua.aspx',
        name: 'Pago Patentes Comerciales'
    },
    {
        link: 'http://appl.smc.cl/pagoaseo/muni/rancagua.aspx',
        name: 'Pago Derechos de Aseo'
    },
    {
        link: 'https://webviews.smartrancagua.com/view/information/directoryView/?_id:n5sAdCgr9hzqLWohz',
        name: 'Información directorio municipal'
    },
    {
        link: 'http://www.rancagua.cl/servicios/recoleccionbasura',
        name: 'Recorrido en vivo camiones de Recolección de basura'
    },
    {
        link: 'https://webviews.smartrancagua.com/integration/parking',
        name: 'Estacionamientos públicos disponibles en vivo'
    },
    {
        link: 'http://www.rancagua.cl/servicios/educacion',
        name: 'Libreta Educativa Colegios Municipales'
    },
    {
        link: 'http://www.rancagua.cl/reportes/luminarias',
        name: 'Reporte de luminarias en mal estado'
    },
    {
        link: 'http://www.rancagua.cl/servicios/dideco',
        name: 'Beneficios sociales dideco'
    },
    {
        link: 'http://appl.smc.cl/juzgadodoc/muni/Rancagua.aspx',
        name: 'Consulta causas Juzgado de Policía Local (JPL2)'
    },
    {
        link: 'http://appl.smc.cl/pagormnp/muni/rancagua.aspx',
        name: 'Pago infracciones Juzgado de Policía Local (JPL2)'
    }
]
