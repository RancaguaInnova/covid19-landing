import React from 'react'
import './styles.scss'

const Suggestions: React.FC = () => {
    return (
        <div className='suggestions'>
            <h3 className='pb-2'>Recomendaciones</h3>
            <h4>¿Cómo prevenirlo?</h4>
            <div className='p-2'>
                <iframe
                    width='100%'
                    height='315'
                    src='https://www.youtube.com/embed/65AvdOQFfaI'
                    frameBorder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                />
            </div>
            <h4>¿Qué es? y Síntomas</h4>
            <div className='p-2'>
                <iframe
                    width='100%'
                    height='315'
                    src='https://www.youtube.com/embed/8G-qSdZTCXA'
                    frameBorder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                />
            </div>
            <div className='m-2'>
                <a
                    className='btn btn-block btn-outline-danger'
                    href='http://www.cormun.cl/userfiles/file/publicidad/2020/PDFCoronavirus.pdf'
                    target='_blank'
                >
                    Ver medidas CORMUN
                </a>
            </div>
        </div>
    )
}

export default Suggestions
