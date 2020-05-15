import React from 'react'
import './styles.scss'

const Statistic: React.FC = () => {
    return (
        <div>
            <h3 className='text-uppercase'>CIFRAS DE CONTAGIO</h3>
            {/*  <h5 className='hash'>#fase4rancagua</h5> */}
             <p className='last-update'>Última actualización 14 Mayo 2020 14:40hrs</p>
            <hr />
            <div className='row'>
                <div className='col-md-6 col-xs-12'>
                    <img className='img-fluid' src='/assets/images/covid-map.jpg' />
                </div>
                <div className='col-md-6 col-xs-12'>
                    <img className='img-fluid mt-2' src='/assets/images/covid-graph.jpg' />
                </div>
            </div>
           
        </div>
    )
}

export default Statistic
