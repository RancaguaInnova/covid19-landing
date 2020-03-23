import React from 'react'
import { isMobile } from 'mobile-device-detect'

import Timeline from 'components/Timeline'
import Map from 'components/Map'
import Suggestions from 'components/Suggestions'
import Order from 'components/Order'
import HealthServices from 'components/HealthServices'
import Vaccination from 'components/Vaccination'
import './styles.scss'

const Home: React.FC = () => {
    return isMobile ? (
        <div className='home'>
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
        </div>
    ) : (
        <div className='home'>
            <section>
                <div className='row'>
                    <div className='col-6'>
                        <Timeline />
                    </div>
                    <div className='col-6'>
                        <Order />
                    </div>
                </div>
            </section>

            <section>
                <div className='row'>
                    <div className='col-6'>
                        <Vaccination />
                    </div>
                    <div className='col-6'>
                        <HealthServices />
                    </div>
                </div>
            </section>
            <section>
                <Map />
            </section>
        </div>
    )
}

export default Home
