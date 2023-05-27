import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import { makeStyles } from '@mui/material';

const useStyles = makeStyles({
    icon: {
      color: 'red',
    },
  });

const Person = (props) => {
    const {imgSrc,name} = props;
    const classes = useStyles();

    return (
        <div className='person-container'>
            <img 
                src={imgSrc} 
                className='person-image'
                height={'85px'}
                width={'85px'}
                alt=''
            />
            <VerifiedIcon className={classes.icon}/>
            <br />
            <div className='person-name '>{name}</div>
        </div>
    )
}

export default Person;