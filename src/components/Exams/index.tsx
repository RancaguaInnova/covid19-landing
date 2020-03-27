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
                    <h4 className='pt-2 pb-2 subtitle'>¿Qué debo hacer con mi examen?</h4>
                </div>{' '}
                <img src='/assets/images/seccion_coronavirus-02.jpg' className='img-fluid' alt='' />
            </div>
            <div>
                <div>
                    <h4 className='pt-2 pb-2 subtitle'>¿Qué hacer si mi resultado es positivo?</h4>
                </div>{' '}
                <img src='/assets/images/seccion_coronavirus-02.jpg' className='img-fluid' alt='' />
                <ul className='list-group pt-4 text-left'>
                    <a
                        onClick={() => {
                            ReactGA.event({
                                category: 'covid-document',
                                action: ''
                            })
                        }}
                        href=''
                        target='_blank'
                        className='list-group-item list-group-item-action justify-content-center srv-item'
                    >
                        <FontAwesomeIcon icon={faChevronRight} className='float-right justify-content-center' />
                        <span className='pr-4 w-100'>Link a PDF 1</span>
                    </a>
                    <a
                        onClick={() => {
                            ReactGA.event({
                                category: 'covid-document',
                                action: ''
                            })
                        }}
                        href=''
                        target='_blank'
                        className='list-group-item list-group-item-action justify-content-center srv-item'
                    >
                        <FontAwesomeIcon icon={faChevronRight} className='float-right justify-content-center' />
                        <span className='pr-4 w-100'>Link a PDF 2</span>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Exams
