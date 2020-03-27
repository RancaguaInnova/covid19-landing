import React from 'react'
import './styles.scss'
import HealthServicesExams from './healthServicesExams'

const Exams: React.FC = () => {
  return (
    <div className="exams">
      <h3 className="text-uppercase">¿Qué hacer si tengo los síntomas?</h3>
      <div>
        {' '}
        <img
          src="/assets/images/seccion_coronavirus-01.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
      <div>
        <h5 className="pt-2 pb-2 subtitle">
          Lugares que hacen el examen de Coronavirus?
        </h5>
        <HealthServicesExams></HealthServicesExams>
      </div>

      <div>
        <div>
          <h5 className="pt-2 pb-2 subtitle">
            {' '}
            Que pasa con mi examen & termina con examen positivo
          </h5>
        </div>{' '}
        <img
          src="/assets/images/seccion_coronavirus-02.jpg"
          className="img-fluid"
          alt=""
        />
      </div>
    </div>
  )
}

export default Exams
