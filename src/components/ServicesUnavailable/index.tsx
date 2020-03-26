import React from 'react'
import './styles.scss'

const Unavailable: React.FC = () => {
    return (
        <div className='unavailable-services p-2'>
            <h3 className='text-uppercase'>SUSPENSIÓN DE SERVICIOS</h3>
            <div className='pt-2'>
                <p className='text-justify '>
                    Para reducir al máximo la concentración de personas circulando en los servicios municipales la
                    Ilustre Municipalidad de Rancagua{' '}
                    <b>ha dispuesto que los departamentos de Obras, Rentas y Tránsito dejen de funcionar</b>.
                </p>
                <p className='text-justify'>
                    Dideco y Veterinaria Municipal <b>sólo atenderán de manera presencial casos de urgencia</b>.
                </p>
                <p className='text-justify'>
                    <b>Se mantendrán los servicios</b> de entrega de agua rural, sanitización de refugios y espacios
                    públicos, cuadrillas de emergencias y retiro de basuras.
                </p>
                <p className='text-justify'>
                    Los Juzgados de policía local 1 y 2, <b>suspendieron todas sus actividades de atención a público</b>
                </p>
            </div>
        </div>
    )
}

export default Unavailable
