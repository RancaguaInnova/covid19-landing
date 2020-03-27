import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import HealtItem from './HealtItem'
import app from 'providers/firebase'
import { collectionData } from 'rxfire/firestore'
import _isEqual from 'lodash/isEqual'
import _sortBy from 'lodash/sortBy'
import Loading from 'components/Loading'
import './styles.scss'

const HealthServices: React.FC = () => {
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [current, setCurrent] = useState<any>(null)
  useEffect(() => {
    var collectionRef = null
    async function loadServices() {
      const servicesRef = app
        .firestore()
        .collection('clinics')
        .where('covid.examen', '==', true)
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

  const onSelectItem = (item: any) => {
    const same = _isEqual(item, current)
    setCurrent(same ? null : item)
  }

  return (
    <div className="suggestions">
      {/* <p className='info-txt'>Listado de centros de salud de Rancagua</p> */}
      <div className="pl-2 pr-2 services-box">
        {loading ? (
          <Loading />
        ) : (
          <Accordion>
            {_sortBy(
              services.filter(s => s.active),
              s => s.name,
            ).map((service, idx) => (
              <HealtItem
                service={{ ...service, idx }}
                key={idx}
                current={current}
                onSelect={onSelectItem}
              />
            ))}
          </Accordion>
        )}
      </div>
    </div>
  )
}

export default HealthServices
