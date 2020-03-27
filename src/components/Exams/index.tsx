import React from 'react'
import './styles.scss'
import ReactGA from 'react-ga'
import HealthServicesExams from './healthServicesExams'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
const Exams: React.FC = () => {
    return (
        <div className='exams'>
            <h3 className='text-uppercase'>¿Qué hacer si tengo los síntomas?</h3>
            <div>
                {' '}
                <img src='/assets/images/seccion_coronavirus-01.jpg' className='img-fluid' alt='' />
            </div>
            <div>
                <h4 className='pt-2 pb-2 subtitle'>¿Dónde realizan el examen de Coronavirus?</h4>
                <HealthServicesExams />
            </div>

            <div>
                <div>
                    <h4 className='pt-2 pb-2 subtitle'> ¿Que pasa con mi examen?</h4>
                </div>{' '}
                <img src='/assets/images/seccion_coronavirus-02.jpg' className='img-fluid' alt='' />
            </div>
            <div>
                <h4 className='pt-2 pb-2 subtitle'> ¿Qué hacer si tengo covid?</h4>
                <ul className='list-group pt-4 text-left'>
                    <a
                        key={1}
                        onClick={() => {
                            ReactGA.event({
                                category: 'HealthServicesExams',
                                action: 'Indicaciones para personas en aislamiento domiciliario por COVID-19	'
                            })
                        }}
                        href={
                            'https://www.minsal.cl/wp-content/uploads/2020/03/2020.03.13_INDICACIONES-EN-CUARENTENA.pdf'
                        }
                        target='_blank'
                        className='list-group-item list-group-item-action justify-content-center srv-item'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon icon={faChevronRight} className='float-right justify-content-center' />
                        <span className='pr-4 w-100'>
                            Indicaciones para personas en aislamiento domiciliario por COVID-19
                        </span>
                    </a>

                    <a
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
                    </a>
                    <a
                        key={1}
                        onClick={() => {
                            ReactGA.event({
                                category: 'HealthServicesExams',
                                action: 'Protocolo de limpieza y desinfección de ambientes COVID-19'
                            })
                        }}
                        href={
                            'https://www.minsal.cl/wp-content/uploads/2020/03/PROTOCOLO-DE-LIMPIEZA-Y-DESINFECCI%C3%93N-DE-AMBIENTES-COVID-19.pdf'
                        }
                        target='_blank'
                        rel='noopener noreferrer'
                        className='list-group-item list-group-item-action justify-content-center srv-item'
                    >
                        <FontAwesomeIcon icon={faChevronRight} className='float-right justify-content-center' />
                        <span className='pr-4 w-100'> Protocolo de limpieza y desinfección de ambientes COVID-19 </span>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Exams
