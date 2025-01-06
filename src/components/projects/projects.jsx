import React from 'react'
import './projects.css'
import ssc from '../../assets/ssc.jpg'
import inter from '../../assets/TSBIE.jpg'
import degree from '../../assets/college.jpg'
import major from '../../assets/Deep-Learning.jpg'
import mini from '../../assets/minipj.jpg'
import intern from '../../assets/intern.png'

function Projects() {
  //This should include my academics, projects or other achievements
  const portfolio = [
    {
      id: 0,
      title: 'B.E Degree',
      img: degree,
      degree: "Information Technology",
      score: "C.G.P.A: 7.66",
      year:"2020-2024",
      link: "might be"
    },
    {
      id: 1,
      title: 'Intermediate TSBIE',
      img: inter,
      degree: "Narayana Junior College",
      score: "G.P.A: 918",
      year:"2018-2020",
      link: "might be"
    },
    {
      id: 2,
      title: `High School TS-SSC`,
      img: ssc,
      degree: "St. Anthony's High School",
      score: "G.P.A: 9.2",
      year:"2018",
      link: "might be"
    },
    {
      id: 3,
      title: 'Major Project',
      img: major,
      degree: "Image Forgery Detection",
      score: "Software to detect fake/tampered images using Deep Learning",
      year:"Dec,2023-Jun,2024",
      link: "might be"
    },
    {
      id: 4,
      title: 'Mini-Project',
      img: mini,
      degree: "Image Seganography Software",
      score: "Software to hide messages inside of an image",
      year:"Jun,2023 - Aug,2023",
      link: "might be"
    },
    {
      id: 5,
      title: 'Summer Internship',
      img: intern,
      degree: "Data Science using Python",
      score: "National Small Industries Coorporation",
      year:"May,2023",
      link: "might be"
    },
  ]
  return (
    <section id='project'>
      <h5>My Academic Qualitfication</h5>
      <h2>Portfolio</h2>
      <div className='container all_projects'>
        { portfolio.map((pro) =>
          <article className='project'>
            <div className='project_img'>
              <img src= {pro.img} alt={pro.title} />
            </div>
            <div className="project_content">
              <h2>{pro.title}</h2>
              <h3>{pro.degree}</h3>
              <p>{pro.score}</p>
              <p>{pro.year}</p>
            </div>
          </article>
        )}
      </div>
    </section>
  )
}

export default Projects