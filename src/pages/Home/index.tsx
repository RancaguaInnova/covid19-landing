import React from 'react'
import { isMobile } from 'mobile-device-detect'
import ReactGA from 'react-ga'
import Timeline from 'components/Timeline'
import Map from 'components/Map'
import Services from 'components/Services'
import ServicesUnavailable from 'components/ServicesUnavailable'
import Order from 'components/Order'
import HealthServices from 'components/HealthServices'
import EmergencyNumbers from 'components/EmergencyNumbers'
import Vaccination from 'components/Vaccination'
import Exams from 'components/Exams'
import './styles.scss'
import Information from 'components/Information'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyringe, faUsers } from '@fortawesome/free-solid-svg-icons'

const Home: React.FC = () => {
    ReactGA.pageview('/')

    return isMobile ? (
        <div className='home'>
            <div className='covid container'>
                {/* <h2>CORONAVIRUS</h2> */}
                <section>
                    <Timeline />
                </section>
                <section>
                    <Order />
                </section>
                <section>
                    <Exams />
                </section>
            </div>
            <div className='vaccination-section container'>
                <h2>
                    <FontAwesomeIcon icon={faSyringe} /> CAMPAÑA INFLUENZA
                </h2>
                <section>
                    <Vaccination />
                </section>
            </div>
            <div className='srv container'>
                <div className='row'>
                    <div className='col-3 '>
                        <img src='/assets/images/logo_red.png' className='img-fluid' />
                    </div>
                    <div className='col-9 pl-0'>
                        <h2>MUNICIPALIDAD DE RANCAGUA</h2>
                    </div>
                </div>
                <section>
                    <ServicesUnavailable />
                </section>
                {/*  <section>
                    <Services />
                </section> */}
                <section>
                    <EmergencyNumbers />
                </section>
            </div>
            {/* <section>
        <Map />
      </section> */}
            {
                <div className='comunity-section container'>
                    <h2>
                        <FontAwesomeIcon icon={faUsers} /> COMUNIDAD
                    </h2>
                    <section>
                        <Map />
                    </section>
                </div>
            }
            {/*  <Information /> */}
        </div>
    ) : (
        <div className='home'>
            <div className='covid-desktop'>
                <section className='container'>
                    <div className='row'>
                        <div className='offset-1 col-5'>
                            <Timeline />
                        </div>
                        <div className='col-5'>
                            <Order />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-10'>
                            <Exams />
                        </div>
                    </div>
                </section>
            </div>
            <div className='vaccination-section'>
                <h2>
                    <FontAwesomeIcon icon={faSyringe} /> CAMPAÑA INFLUENZA
                </h2>
                <section className='container'>
                    <Vaccination />
                </section>
            </div>
            <div className='srv '>
                <div className='container'>
                    <div className='row'>
                        <div className='offset-4 col-1 p-0'>
                            <img src='/assets/images/logo_red.png' className='img-fluid logo-rgua' />
                        </div>
                        <div className='col-3 pt-2'>
                            <h2>MUNICIPALIDAD DE RANCAGUA</h2>
                        </div>
                    </div>
                </div>

                <section className='container p-4'>
                    <ServicesUnavailable />
                </section>
                {/*  <section className='container'>
                    <Services />
                </section> */}
                <section className='container'>
                    <EmergencyNumbers />
                </section>
            </div>
            {/* <section>
                <div className='row'>
                    <div className='offset-1 col-10'>
                        <HealthServices />
                    </div>
                </div>
            </section> */}
            {
                <section>
                    <div className='row'>
                        <div className='offset-1 col-10'>
                            <Map />
                        </div>
                    </div>
                </section>
            }
            {/*  <Information /> */}
        </div>
    )
}

export default Home
