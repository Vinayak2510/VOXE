import React from 'react'

const Person = (props) => {
    const {imgSrc,name,color} = props;

    return (
        <div className='person-container' style={{backgroundColor:color}}>
            <img 
                src={imgSrc} 
                className='person-image'
                height={'85px'}
                width={'85px'}
            />
            <br />
            {name}
        </div>
    )
}

export default Person;