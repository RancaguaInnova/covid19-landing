import React, { useState } from 'react'
import ReactGA from 'react-ga'

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
        <div
            className='card-timeline'
            onClick={() => {
                ReactGA.modalview(card.urlExterna)
            }}
        >
            <div className='card'>
                <div className='card-body'>
                    <div className='row left-column'>
                        <div className='col-3 text-center p-2 '>
                            <h5 className='font-weight-bold day'>{date.format('DD').toUpperCase()}</h5>
                            <h5 className='font-weight-bold month'>{date.format('MMMM').toUpperCase()}</h5>

                            <p className='pt-2'>
                                <FontAwesomeIcon icon={faClock} size={'2x'} />
                            </p>
                            <p className='font-weight-bold hour'>{date.format('HH:mm')}</p>
                        </div>
                        <div className='col-8 card-content p-2'>
                            <h5 className='card-title'>{card.title}</h5>
                            <p className='card-text'>
                                {more ? (
                                    card.description
                                ) : (
                                    `${card.description.substring(0, 140)}${card.description.length > 140 ? '...' : ''}`
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTimeline
