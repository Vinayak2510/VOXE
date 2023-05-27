import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

const Person = (props) => {
    const {imgSrc,name} = props;

    return (
        <div className='person-container'>
            <div>
            <img 
                src={imgSrc} 
                className='person-image'
                height={'85px'}
                width={'85px'}
                alt=''
            />
            <span className='icon-verified'><VerifiedIcon color='secondary'/></span>
            </div>
            <br />
            <div className='person-name '>{name}</div>
        </div>
    )
}

export default Person;