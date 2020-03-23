import React from 'react'
import { isMobile } from 'mobile-device-detect'

import Timeline from 'components/Timeline'
import Map from 'components/Map'
import Suggestions from 'components/Suggestions'
import Order from 'components/Order'
import HealthServices from 'components/HealthServices'
import Vaccination from 'components/Vaccination'
import './styles.scss'
import Information from 'components/Information'

const Home: React.FC = () => {
  return isMobile ? (
    <div className="home">
      <section>
        <Timeline />
      </section>
      <section>
        <Order />
      </section>
      <section>
        <Vaccination />
      </section>
      <section>
        <HealthServices />
      </section>
      <section>
        <Map />
      </section>
      <Information></Information>
    </div>
  ) : (

        <div className='home'>
            <section>
                <div className='row'>
                    <div className='offset-1 col-5'>
                        <Timeline />
                    </div>
                    <div className='col-5'>
                        <Order />
                    </div>
                </div>
            </section>


      <section>
        <Vaccination />
      </section>
      <section>
        <div className="row">
          <div className="offset-1 col-10">
            <HealthServices />
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="offset-1 col-10">
            <Map />
          </div>
        </div>
      </section>
      <Information></Information>
    </div>
  )
}

export default Home
