import { Button } from '@mui/material';
import React from 'react'

const PhysicalAddress = () => {
    return (
        <div className='physical-footer'>
            <div className='community-button'>
                <Button 
                    style={{
                        backgroundColor: "#ffb580",
                        color: "black"
                    }}
                    variant="contained"
                >
                    Join the Community
                </Button>
            </div>
            <div className='p-address-footer'>
                <p>
                VOXE Finance s.r.o I Pfiëná 1892/4 | 110 00 Praha, Czech Republic I ID: 14235528
                </p>
            </div>
        </div>
    )
}

export default PhysicalAddress;