import React from 'react'
import { isMobile } from 'mobile-device-detect'
import ReactGA from 'react-ga'

import Timeline from 'components/Timeline'
import Map from 'components/Map'
import Services from 'components/Services'
import ServicesUnavailable from 'components/ServicesUnavailable'
import Order from 'components/Order'
import HealthServices from 'components/HealthServices'
import Vaccination from 'components/Vaccination'
import './styles.scss'
import Information from 'components/Information'

const Home: React.FC = () => {
  ReactGA.pageview('/')

  return isMobile ? (
    <div className="home">
      <div className="covid container">
        {/* <h2>CORONAVIRUS</h2> */}
        <section>
          <Timeline />
        </section>
        <section>
          <Order />
        </section>
      </div>
      <div className="vaccination-section container">
        <h2>CAMPAÑA INFLUENZA</h2>
        <section>
          <Vaccination />
        </section>
      </div>
      <div className="srv container">
        <h2>MUNICIPALIDAD DE RANCAGUA</h2>

        <section>
          <ServicesUnavailable />
        </section>
        <section>
          <Services />
        </section>
      </div>
      {/* <section>
        <Map />
      </section> */}
      <div className="comunity-section container">
        <h2>COMUNIDAD</h2>
        <section>
          <Map />
        </section>
      </div>
      {/*  <Information /> */}
    </div>
  ) : (
    <div className="home">
      <section>
        <div className="row">
          <div className="offset-1 col-5">
            <Timeline />
          </div>
          <div className="col-5">
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
      {/* <section>
        <div className="row">
          <div className="offset-1 col-10">
            <Map />
          </div>
        </div>
      </section> */}
      <Information />
    </div>
  )
}

export default Home
