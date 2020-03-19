import React, { useEffect, useState } from 'react'
import app from 'providers/firebase'
import { collectionData } from 'rxfire/firestore'
import _isEqual from 'lodash/isEqual'
import _sortBy from 'lodash/sortBy'
import Loading from 'components/Loading'
import VaccinationItem from './VaccinationItem'

import './styles.scss'

const Vaccination: React.FC = () => {
    const [ services, setServices ] = useState<any[]>([])
    const [ loading, setLoading ] = useState<boolean>(true)
    useEffect(() => {
        var collectionRef = null
        async function loadServices() {
            const servicesRef = app.firestore().collection('vaccinations')
            collectionRef = collectionData(servicesRef, 'id')

            collectionRef.subscribe((list: any = []) => {
                // Prevent innecesary updates
                if (!_isEqual(list, services)) {
                    setServices(list)
                    setLoading(false)
                }
            })
        }

        loadServices()
    })
    return (
        <div className='vaccination'>
            <h3 className='pb-2 text-uppercase'>Campaña Influenza 2020</h3>
            <h5>¿Quiénes deben vacunarse contra la influenza?</h5>

            <img className='img-fluid' src='/assets/images/influenza.png' />

            <h5 className='pt-2 pb-2 '>¿Dónde vacunarse?</h5>

            {loading && <Loading />}

            {!loading && (
                <div className='pl-2 pr-2 vaccination-box overflow-auto'>
                    <div className='list-group '>
                        {_sortBy(services.filter((s) => s.active), (s) => s.name).map((service, idx) => (
                            <VaccinationItem service={service} key={idx} />
                        ))}
                    </div>
                </div>
            )}
            {/*  <small className='pt-2 text-danger'>Desliza para ver todos</small> */}
            {/* <div className='m-2'>
                <button
                    className='btn btn-block btn-outline-danger'
                    onClick={() => {
                        setMore(!more)
                    }}
                >
                    {more ? 'Mostrar menos' : 'Mostrar todos'}
                </button>
            </div> */}
        </div>
    )
}

export default Vaccination
