import React from 'react'
import ReactGA from 'react-ga'
import './styles.scss'

const Map: React.FC = () => {
  return (
    <div className="map">
      <h3 className="text-uppercase">Mapa de Contingencia</h3>
      <p className="info-txt">
        En el siguiente mapa podrás encontrar información actualizada sobre los
        horarios de funcionamiento de farmacias, supermercados, centros de salud
        y emprendedores que entreguen servicios de alimentación y necesidades
        básicas.
      </p>
      <div className="map-box">
        <iframe
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: '0' }}
          src="https://www.google.com/maps/d/embed?mid=1AHqm7TsKrxWS-qPbevm45XsmBBwRAzOM"
          allowFullScreen
        />
      </div>

      <div className="entrepreneur-box mt-2">
        <p className="text-center font-weight-bold">
          Si quieres que tu negocio aparezca en el mapa inscríbete en el
          siguiente formulario:{' '}
        </p>
        <a
          className="btn btn-outline-danger btn-block"
          onClick={() => {
            ReactGA.event({
              category: 'map-form',
              action: 'open',
            })
          }}
          href="https://forms.gle/t7xGKcJZx9XfMmDw8"
          target="_black"
        >
          INSCRIBETE AQUÍ
        </a>
      </div>
    </div>
  )
}

export default Map
