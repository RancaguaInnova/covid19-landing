import React, { useState } from 'react'
import './styles.scss'
import moment from 'moment-timezone'
import 'moment/locale/es'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const tz = 'America/Santiago'

type CardProps = {
    card: any
}

const CardTimeline: React.FC<CardProps> = ({ card }) => {
    const [ more, setMore ] = useState<boolean>(false)
    const date: any = moment(card.date.toDate()).tz(tz).locale('es')
    return (
        <div className='card-timeline'>
            <div className='card'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-3 text-center p-0'>
                            <p>
                                <FontAwesomeIcon icon={faClock} size={'2x'} />
                            </p>
                            <h5 className='font-weight-bold day'>{date.format('DD').toUpperCase()}</h5>
                            <h5 className='font-weight-bold month'>{date.format('MMMM').toUpperCase()}</h5>
                            <p className='font-weight-bold hour'>{date.format('HH:mm')}</p>

                            {/* {card.urlExterna.trim() !== '' && (
                                <a className='btn btn-block btn-link card-link' href={card.urlExterna} target='_blank'>
                                    <FontAwesomeIcon icon={faLink} />
                                </a>
                            )} */}
                        </div>
                        <div className='col-9'>
                            <h5 className='card-title'>{card.title}</h5>
                            <p className='card-text'>
                                {more ? (
                                    card.description
                                ) : (
                                    `${card.description.substring(0, 140)}${card.description.length > 140 ? '...' : ''}`
                                )}
                            </p>
                            {/* <button
                                className='btn btn-block btn-link'
                                onClick={() => {
                                    setMore(!more)
                                }}
                            >
                                Ver más
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTimeline
