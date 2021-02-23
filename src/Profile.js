import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./profile.css";
const Profile = () => {
  const [index, setIndex] = useState(2);
  console.log(people);
  const { name, job, image, text } = people[index];

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
          <FaChevronLeft />
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Profile;
