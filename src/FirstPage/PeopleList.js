import React, { useEffect, useState } from 'react'
import Person from './Person';
import './PeopleList.css';

const PeopleList = () => {
  const people = ['Sam','Tam','Cam','Bebe','Cece','Dede','Sam','Tam','Cam','Bebe','Cece','Dede']

  const [active, setActive] = useState(1);

  const handleScroll = () => {
    const divs = document.getElementsByClassName('person-container');
    const threshold = 700; // Change this value as needed

    for (let i = 0; i < divs.length; i++) {
      const rect = divs[i].getBoundingClientRect();
      const isVisible = rect.left < window.innerWidth - threshold;

      if (isVisible) {
        setActive(i);
      }
    }
  };

  useEffect(() => {
    document.getElementById('people-container').addEventListener('scroll', handleScroll);
    return () => {
      document.getElementById('people-container').removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className="font-xl-800">Look who’s already inside 👀</div>
    <div className='scrollable' id='people-container'>
      {
        people.map((person,index)=>{
          return(
          <Person
            imgSrc = 'https://lh3.googleusercontent.com/a/AGNmyxYze6BVtLlyO3djDl6LC-s-ZUi67u8_HS61hL222JU=s288-c-no'
            name = {person}
            color = {index === active ? 'white' : '#f2f6fe'}
            key = {index}
          />)
        })
      }
    </div>
    </>
    
  )
}

export default PeopleList;