import React from 'react'
import './styles.scss'
import ReactGA from 'react-ga'
import HealthServicesExams from './healthServicesExams'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const Exams: React.FC = () => {
  return (
    <div className="exams">
      <h3 className="text-uppercase">
        ¿Con qué síntomas debo ir a un centro médico?
      </h3>
      <div>
        {' '}
        <img
          src="/assets/images/seccion_coronavirus-01.png"
          className="img-fluid"
          alt=""
        />
      </div>
      <div>
        <h4 className="pt-2 pb-2 subtitle">
          ¿En qué Centros de Salud se realiza el examen para detectar el COVID-19 en Rancagua?
        </h4>
        <div className="alert alert-warning" role="alert">
          <p> <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="float-left justify-content-center"
          />El examen PCR se puede realizar en cualquier CESFAM de la comuna de Rancagua, pero primero se debe pasar por un protocolo de clasificación del estado del paciente (Triage) el cual determina si es necesario realizar el test.
        </p> <p>También se puede realizar el examen PCR en los siguientes lugares:</p>
        </div>
        <HealthServicesExams />
        <p className='last-update'>*Última actualización de Centros de Salud que realizan examen de COVID-19  15 Mayo 2020 12:00hrs</p>

      </div>

      <div>
        <div>
          <h4 className="pt-2 pb-2 subtitle">
            ¿Que hacer luego de tomarme el examen del COVID-19?
          </h4>
        </div>{' '}
        <img
          src="/assets/images/seccion_coronavirus-02.png"
          className="img-fluid"
          alt=""
        />
      </div>
      <div>
        <h4 className="pt-2 pb-2 subtitle">
          ¿Que hacer si mi examen del COVID-19 es positivo?
        </h4>
        <ul className="list-group pt-4 text-left">
          <a
            key={100}
            onClick={() => {
              ReactGA.event({
                category: 'HealthServicesExams',
                action:
                  'Indicaciones para personas en aislamiento domiciliario por COVID-19	',
              })
            }}
            href={
              'https://www.minsal.cl/wp-content/uploads/2020/03/2020.03.13_INDICACIONES-EN-CUARENTENA.pdf'
            }
            target="_blank"
            className="list-group-item list-group-item-action justify-content-center srv-item"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="float-right justify-content-center"
            />
            <span className="pr-4 w-100">
              Indicaciones para personas en aislamiento domiciliario por
              COVID-19
            </span>
          </a>

          {/*   <a
                        key={1}
                        onClick={() => {
                            ReactGA.event({
                                category: 'HealthServicesExams',
                                action: 'Que hacer si estas con alguien con covid'
                            })
                        }}
                        href={
                            'https://www.nytimes.com/es/2020/03/17/espanol/estilos-de-vida/como-cuidar-mayores-coronavirus.html'
                        }
                        target='_blank'
                        rel='noopener noreferrer'
                        className='list-group-item list-group-item-action justify-content-center srv-item'
                    >
                        <FontAwesomeIcon icon={faChevronRight} className='float-right justify-content-center' />
                        <span className='pr-6 w-100'> Que hacer si estas con alguien con covid </span>
                    </a> */}
          <a
            key={1}
            onClick={() => {
              ReactGA.event({
                category: 'HealthServicesExams',
                action:
                  'Protocolo de limpieza y desinfección de ambientes COVID-19',
              })
            }}
            href={
              'https://www.minsal.cl/wp-content/uploads/2020/03/PROTOCOLO-DE-LIMPIEZA-Y-DESINFECCI%C3%93N-DE-AMBIENTES-COVID-19.pdf'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="list-group-item list-group-item-action justify-content-center srv-item"
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="float-right justify-content-center"
            />
            <span className="pr-4 w-100">
              {' '}
              Protocolo de limpieza y desinfección de ambientes COVID-19{' '}
            </span>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Exams
