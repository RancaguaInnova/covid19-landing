import React from 'react'
import './styles.scss'

const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className='row'>
                <div className='col-8'>
                    <h1 className='text-center'>CONTINGENCIA</h1>
                    <h2 className='text-center'>COVID-19</h2>
                </div>
                <div className='col-4'>
                    <img src='assets/images/logo_red.png' />
                </div>
            </div>
        </div>
    )
}

export default Header
