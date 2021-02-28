import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./profile.css";
const Profile = () => {
  const [index, setIndex] = useState(0);
  console.log(people);
  const { name, job, image, text } = people[index];

  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextProfile = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const previousProfile = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <article className='profile'>
      <div className='profile_image'>
        <img src={image} alt={name} />
        <span></span>
      </div>
      <h4 className='profile_name'>{name}</h4>
      <p className='profile_title'>{job}</p>
      <p className='profile_description'>{text}</p>
      <div>
        <button>
          <FaChevronLeft
            className='profile_button-left'
            onClick={previousProfile}
          />
          <FaChevronRight
            className='profile_button-right'
            onClick={nextProfile}
          />
        </button>
      </div>
      <button className='profile_button-random'>Random Profile</button>
    </article>
  );
};

export default Profile;
