import React from 'react'
import Timeline from 'components/Timeline'
import Map from 'components/Map'
import Suggestions from 'components/Suggestions'
import Order from 'components/Order'
import HealthServices from 'components/HealthServices'
import './styles.scss'

const Home: React.FC = () => {
    return (
        <div className='home'>
            <section>
                <Timeline />
            </section>
            <section>
                <Order />
            </section>
            <section>
                <Map />
            </section>
            <section>
                <HealthServices />
            </section>
            <section>
                <Suggestions />
            </section>
        </div>
    )
}

export default Home
