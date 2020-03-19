import React, { useEffect, useState } from 'react'
import app from 'providers/firebase'
import { collectionData } from 'rxfire/firestore'
import _isEqual from 'lodash/isEqual'
import Loading from 'components/Loading'
/* import { FirestoreCollection } from 'react-firestore' */

import './styles.scss'

const Order: React.FC = () => {
    const [ actions, setActions ] = useState<any[]>([])
    const [ loading, setLoading ] = useState<boolean>(true)

    useEffect(() => {
        var collectionRef = null
        async function getOrders() {
            const statusRef = app.firestore().collection('actions')
            collectionRef = collectionData(statusRef, 'id')

            collectionRef.subscribe((list: any = []) => {
                // Prevent innecesary updates
                if (!_isEqual(list, actions)) {
                    setActions(list)
                    setLoading(false)
                }
            })
        }

        getOrders()
    })
    return (
        <div className='order'>
            <h3 className='pb-2 text-uppercase'>Recomendaciones</h3>
            {/*  <h5 className='hash'>#fase4rancagua</h5> */}
            <img className='img-fluid' src='/assets/images/plan-minsal.png' />
            {/* <p className='info-txt'>Medidas adoptadas a nivel Comunal por Fase 4 de COVID-19</p> */}

            {loading ? (
                <Loading />
            ) : (
                <ul className='list-group list-group-flush text-left'>
                    {actions.filter((a: any) => a.active).map((action, key) => (
                        <li className='list-group-item' key={key}>
                            {key + 1}. {action.description}
                        </li>
                    ))}
                </ul>
            )}

            <div className='m-2'>
                <a className='btn btn-block btn-outline-danger' target='_blank' href='https://www.gob.cl/coronavirus/'>
                    Información oficial gob.cl
                </a>
            </div>
        </div>
    )
}

export default Order
