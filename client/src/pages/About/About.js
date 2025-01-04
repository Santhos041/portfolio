import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import profilePic from '../../assets/santhosh_profile.jpg';


const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profilePic} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              I am Santhosh Kumar, a B.Tech student specializing in Artificial Intelligence and Data Science at Sri Eshwar College of
               Engineering, currently holding a CGPA of 8.1. I specialize in full-stack web development
               with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js), building scalable applications and implementing RESTful APIs.

               
              </p>
              <p>
              Passionate about competitive programming, I have solved 200+ problems on LeetCode with a maximum rating of 1307. I have also been a finalist in
                multiple hackathons and secured second place in a Mini Project Expo. With a strong foundation in C, Python, and Java, I am focused on 
                enhancing my skills and contributing to the tech industry.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
