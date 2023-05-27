import React from 'react'
import SocialMedia from './SocialMedia';
import PhysicalAddress from './PhysicalAddress';
import './AddressFooter.css';

const AddressFooter = () => {
    return (
        <div className='footer-container'>
            <div className='address-footer'>
                <SocialMedia />
                <PhysicalAddress />
            </div>
            <div className='gray-line'></div>
            <div style={{color:'#928e8e',paddingTop:'1%'}}>ⓒ 2023, VOXE</div>
        </div>
    )
}

export default AddressFooter;