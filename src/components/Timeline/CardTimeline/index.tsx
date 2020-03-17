import React from 'react'
import './styles.scss'

const CardTimeline: React.FC = () => {
    return (
        <div className='card-timeline'>
            <div className='card'>
                <div className='card-body row'>
                    <div className='col-4 text-center'>
                        <h5 className='font-weight-bold'>10:00</h5>
                        <p className='date'>14 Marzo</p>
                    </div>
                    <div className='col-8'>
                        <h5 className='card-title'>TÍTULO</h5>
                        {/* <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6> */}
                        <p className='card-text'>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p>
                        {/*  <a href='#' className='card-link'>
                            Ver más
                        </a> */}
                        {/*  
                    <a href='#' className='card-link'>
                        Another link
                    </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTimeline
