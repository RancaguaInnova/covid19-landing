import React from 'react'
import './styles.scss'

import { Row, Col } from 'react-bootstrap'

const Unavailable: React.FC = () => {
  return (
    <div className="unavailable-services">
      <Row>
        <Col md={12}>
          <h4>SUSPENSIÓN DE SERVICIOS</h4>
          <div className="text-left textservice">
            Para reducir al máximo la concentración de personas circulando en
            los servicios municipales la Ilustre Municipalidad de Rancagua ha
            dispuesto que los siguientes servicio dejen de funcionar:
          </div>
          <ul className="lista">
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
      <hr></hr>
      <Row>
        <Col md={12}>
          <h4>SUSPENSIÓN DE SERVICIOS PARCIAL</h4>
          <div className="text-left textservice">
            Sólo atenderán de manera presencial casos de urgencia.
          </div>
          <ul className="lista">
            <li>
              <span>Dideco</span>
            </li>
            <li>
              <span>Veterinaria</span>
            </li>
          </ul>
        </Col>
      </Row>
      <hr></hr>

      <Row>
        <Col md={12}>
          <h4>SERVICIOS FUNCIONAMIENTO NORMAL</h4>
          <ul className="lista">
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

      <Row>
        <Col md={12}>
          <h4>SERVICIOS DIGITALES</h4>
          <div className="text-left textservice">
            De manera online se han dispuesto los siguientes servicios
            digitales:
          </div>
          <ul className="lista">
            <li>
              <span>
                <a
                  href="http://pago.smc.cl/pagopcvv2/muni/RANCAGUA.aspx"
                  target="_blank"
                >
                  Pago de Permisos de Circulación (PCV)
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="http://appl.smc.cl/PCV/ConsultaRMNP/frmCalculoPCV.aspx?COMUNA=RANCAGUA"
                  target="_blank"
                >
                  Consultar valor PCV
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="http://appl.smc.cl/pagopc/muni/rancagua.aspx"
                  target="_blank"
                >
                  Pago Patentes Comerciales
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="http://appl.smc.cl/pagoaseo/muni/rancagua.aspx"
                  target="_blank"
                >
                  Pago Derechos de Aseo
                </a>
              </span>
            </li>
            {/*   <li>
              <span>
                <a
                  href="http://appl.smc.cl/lc/SolicitaHoras/muni/rancagua.aspx"
                  target="_blank"
                >
                  Pago de renovación licencia de conducir
                </a>
              </span>
            </li> */}
            <li>
              <span>
                <a
                  href="https://webviews.smartrancagua.com/view/information/directoryView/?_id=n5sAdCgr9hzqLWohz"
                  target="_blank"
                >
                  Información directorio municipal
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="http://www.rancagua.cl/servicios/recoleccionbasura"
                  target="_blank"
                >
                  Recorrido en vivo camiones de Recolección de basura
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="https://webviews.smartrancagua.com/integration/parking"
                  target="_blank"
                >
                  Estacionamientos públicos disponibles en vivo
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="http://www.rancagua.cl/servicios/educacion"
                  target="_blank"
                >
                  Libreta Educativa Colegios Municipales
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="http://www.rancagua.cl/reportes/luminarias"
                  target="_blank"
                >
                  Reporte de luminarias en mal estado
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="http://www.rancagua.cl/servicios/dideco"
                  target="_blank"
                >
                  Beneficios sociales dideco
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="http://appl.smc.cl/juzgadodoc/muni/Rancagua.aspx"
                  target="_blank"
                >
                  Consulta causas Juzgado de Policía Local (JPL2)
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="http://appl.smc.cl/pagormnp/muni/rancagua.aspx"
                  target="_blank"
                >
                  Pago infracciones Juzgado de Policía Local (JPL2)
                </a>
              </span>
            </li>
            {/*  <li>
              <span>Certificado de Vigencia - Organizaciones Comunitarias</span>
            </li>
            <li>
              <span>Certificado de Deuda - Organizaciones Comunitarias</span>
            </li>
            <li>
              <span>Certificado de Dirección de Obras</span>
            </li> */}
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export default Unavailable
