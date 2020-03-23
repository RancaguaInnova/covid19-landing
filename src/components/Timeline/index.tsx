import React, { useEffect, useState } from 'react'
import { isMobile } from 'mobile-device-detect'

import app from 'providers/firebase'
import moment from 'moment-timezone'
import { collectionData } from 'rxfire/firestore'
import _isEqual from 'lodash/isEqual'
import _sortBy from 'lodash/sortBy'
import Loading from 'components/Loading'
import Card from './CardTimeline'
import './styles.scss'

const Timeline: React.FC = () => {
    const [ news, setNews ] = useState<any[]>([])
    const [ visible, setVisible ] = useState<number>(10)
    const [ loading, setLoading ] = useState<boolean>(true)

    const now = moment()

    useEffect(() => {
        var collectionRef = null
        async function loadNews() {
            const newsRef = app.firestore().collection('news')
            collectionRef = collectionData(newsRef, 'id')

            collectionRef.subscribe((list: any = []) => {
                // Prevent innecesary updates
                if (!_isEqual(list, news)) {
                    setNews(list)
                    setLoading(false)
                }
            })
        }

        loadNews()
    })
    return (
        <div className='timeline'>
            <h3 className='text-uppercase'>Último minuto</h3>
            <h4>#covid19rancagua</h4>
            <hr />
            <div className={`${isMobile ? 'timeline-box' : 'timeline-box-desktop'} overflow-auto`}>
                {loading && <Loading />}
                {!loading && (
                    <div className='news-container'>
                        {_sortBy(news.filter((n, idx) => n.active && idx < visible), (n: any) => {
                            return now.diff(n.date.toDate())
                        }).map((n: any, k) => {
                            return n.urlExterna.trim() !== '' ? (
                                <a href={n.urlExterna} key={k} target='_blank'>
                                    <Card card={n} />
                                </a>
                            ) : (
                                <Card card={n} key={k} />
                            )
                        })}
                    </div>
                )}

                {news.length > visible && (
                    <div className='view-more-box'>
                        <button
                            className='btn btn-block btn-outline-link'
                            onClick={() => {
                                setVisible(visible + 10)
                            }}
                        >
                            Cargar más...
                        </button>
                    </div>
                )}
            </div>

            {/* <small className='pt-2 text-danger'>Desliza para ver todos</small> */}
            {/* <div className='m-2'>
                <button className='btn btn-block btn-outline-danger'>Actualizar</button>
            </div> */}
        </div>
    )
}

export default Timeline
