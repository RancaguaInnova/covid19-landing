import React from 'react'
import './styles.scss'

const Statistic: React.FC = () => {
    return (
        <div>
            <h3 className='text-uppercase'>CIFRAS DE CONTAGIO</h3>
            {/*  <h5 className='hash'>#fase4rancagua</h5> */}
             <p className='last-update'>Última actualización 15 Mayo 2020 17:00hrs</p>
            <hr />
            <div className='row'>
                <div className='col-md-6 col-xs-12'>
                    <img className='img-fluid' src='/assets/images/covid-map.jpeg' />
                </div>
                <div className='col-md-6 col-xs-12'>
                    <img className='img-fluid mt-2' src='/assets/images/covid-graph.jpeg' />
                </div>
            </div>
           
        </div>
    )
}

export default Statistic
