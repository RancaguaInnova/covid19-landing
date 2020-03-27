import React from 'react'
import './styles.scss'
import HealthServicesExams from './healthServicesExams'

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
                    <h4 className='pt-2 pb-2 subtitle'>¿Qué hacer con mi examen?</h4>
                </div>{' '}
                <img src='/assets/images/seccion_coronavirus-02.jpg' className='img-fluid' alt='' />
            </div>
            <div>
                <div>
                    <h4 className='pt-2 pb-2 subtitle'>¿Qué hacer si mi resultado es positivo?</h4>
                </div>{' '}
                <img src='/assets/images/seccion_coronavirus-02.jpg' className='img-fluid' alt='' />
            </div>
        </div>
    )
}

export default Exams
