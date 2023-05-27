import React, { useEffect, useRef } from 'react';
import Person from './Person';
import './PeopleList.css';

const PeopleList = () => {
  const people = ['Sam', 'Tam', 'Cam', 'Bebe', 'Cece', 'Dede', 'Sam', 'Tam', 'Cam', 'Bebe', 'Cece', 'Dede'];
  
  return (
    <>
      <div className="inside-text">Look who’s already inside 👀</div>
      <div className="scrollable">
        {people.map((person, index) => (
          <Person
            imgSrc="https://lh3.googleusercontent.com/a/AGNmyxYze6BVtLlyO3djDl6LC-s-ZUi67u8_HS61hL222JU=s288-c-no"
            name={person}
            key={index}
            id={`person-${index}`}
          />
        ))}
      </div>
    </>
  );
};

export default PeopleList;
