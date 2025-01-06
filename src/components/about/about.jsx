import React from 'react'
import './about.css'
import me from '../../assets/Pardhu_edited.jpg'
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

function About() {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className="container about_container">
        <div  className='about_me'>
          <div className='about_me-image'>
            <img src= {me} alt='me'/>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h4>Experience</h4>
              <small>Fresher</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h4>Projects</h4>
              <small>2 Fully Completed</small>
            </article>
          </div>
          <p>
            I am a recent graduate with a Bachelor’s of Engineering Degree in Information Technology at Matrusri Engineering College. I have a strong foundation in Python, Java and other programming languages, with handson experience through internships, projects, and coursework.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About