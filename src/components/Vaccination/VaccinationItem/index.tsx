import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

const VaccinationItem: React.FC = () => {
    return (
        <li className='list-group-item list-group-item-action text-left'>
            <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>
                    Cesfam 1{' '}
                    <span className='float-right'>
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                </h5>
                {/*  <small>3 days ago</small> */}
            </div>
            <p className='mb-1'>
                <a
                    href='https://www.google.com/maps?q=hospital+regional+rancagua&rlz=1C5CHFA_enCL822CL822&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiXsKDN15_oAhVDA9QKHZ3xCbkQ_AUoAXoECAwQAw'
                    target='_blank'
                >
                    Av Libertador Bernardo O'Higgins 3065, Rancagua, O'Higgins
                </a>
            </p>
            <small>Lunes a Sábado de 08:00 a 20:00 hrs.</small>
        </li>
    )
}

export default VaccinationItem
