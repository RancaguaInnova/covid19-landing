import React from 'react'
import './styles.scss'

const Suggestions: React.FC = () => {
    return (
        <div className='suggestions'>
            <h3>Recomendaciones</h3>
            {/* <p className='info-txt'>Recomendaciones</p> */}
            <ul className='list-group list-group-flush text-left'>
                <a
                    className='list-group-item'
                    href='http://www.cormun.cl/userfiles/file/publicidad/2020/PDFCoronavirus.pdf'
                    target='_blank'
                >
                    Medidas para prevenir el Coronavirus
                </a>
                {/* <a className='list-group-item'>2. Cierre Recintos deportivos en toda la comuna</li>
                <li className='list-group-item'>3. Otra medida adoptada por el municipio/gobierno</li> */}
            </ul>
            {/*  */}
        </div>
    )
}

export default Suggestions
