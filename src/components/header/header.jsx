import React from 'react'
import './header.css';
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Resume from '../../assets/pardhu resume.pdf'

function Header() {
  const HeaderSocials = () =>{
    return (
      <div className='header__socials'>
        <a href='www.linkedin.com/in/bobbala-pardhu-chowdary'><TiSocialLinkedin/> </a>
        <a href='https://github.com/pardhu-b-chowdary'><FaGithub /></a>
        <a href='#contact'><SiGmail /></a>
      </div>
    );
  }

  const CvDownload = () => {
    return(
      <div className='cta'>
        <a href={Resume} className='btn'>Download CV</a>
        <a href='/' className='btn btn-primary'>Connect</a>
      </div>
    );
  }


  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hi There! I'm</h5>
        <h2>Pardhu Chowdary Bobbala</h2>
        <h5 className="text-light">Freelance Programmer</h5>
        <CvDownload/>
        <a href="#contact" className="scroll__down">Scroll Down...</a>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header