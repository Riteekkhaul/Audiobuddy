import React from 'react';
import  '../styles/About.css';
import{ useNavigate} from 'react-router-dom';

const About = () => {

  const navigate =useNavigate();
  const home =()=>{
    navigate('/');
  }
  return (
    <div className='about-con'>
      <div className='about-box'>
      <div className='profile-con'>
        <img id='pro' src='profile.png' />
      </div>
      <div className='bio'>
        <h3>Riteek R. Khaul</h3>
        <p>Email : rkhaul2000@gmail.com</p>
        <p>Contact : 9767735958</p>
        <p> Full (MERN) Stack Developer </p>
        <button id='home-btn' onClick={home}>Back To Home</button>
      </div>
      </div> 
    </div>
  )
}

export default About