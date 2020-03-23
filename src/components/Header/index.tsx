import React from 'react'
import './styles.scss'
import { isMobile } from 'mobile-device-detect'

const Header: React.FC = () => {
    return isMobile ? (
        <div className='header'>
            <img src='assets/images/mobile-header.png' className='img-fluid' />
        </div>
    ) : (
        <div className='container'>
            <div className='header'>
                <img src='assets/images/mobile-header.png' className='img-fluid' />
            </div>
        </div>
    )
}

export default Header
