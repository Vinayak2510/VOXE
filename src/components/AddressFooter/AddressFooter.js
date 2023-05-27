import React from 'react'
import SocialMedia from './SocialMedia';
import PhysicalAddress from './PhysicalAddress';
import './AddressFooter.css';

const AddressFooter = () => {
    return (
        <div className='address-footer'>
            <SocialMedia />
            <PhysicalAddress />
        </div>
    )
}

export default AddressFooter;