import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css'

function Experience() {
  const primary_skills = [
    {id:0, value: 'Python'},
    {id:1, value: 'Java'},
    {id:2, value: 'C/C++'},
    {id:3, value: 'HTML/CSS/JS'},
    {id:4, value: 'S.Q.L'},
    {id:5, value: 'M.S.Office'},
  ]
  const secondary_skills = [
    {id:0, value: 'ReactJs'},
    {id:1, value: 'Django'},
    {id:3, value: 'Numpy/Pandas'},
    {id:4, value: 'Tkinter/PyQt'},
  ]
  return (
    <section id='skills'>
      <h2>My Skills</h2>
      <div className='container skills_container'>
        <div className="skills_primary">
          <h3>Primary Skills</h3>
          <div className='skills_content'>
            {primary_skills.map((skill) => 
            <article className='skills_values'>
              <BsFillPatchCheckFill className='skills_value_icon'/><h4>{skill.value}</h4>
            </article>
            )}
          </div>
        </div>
        <div className="skills_secondary">
          <h3>Secondary Skills</h3>
          <div className='skills_content'>
            {secondary_skills.map((skill) => 
            <article className='skills_values'>
              <BsFillPatchCheckFill className='skills_value_icon'/><h4>{skill.value}</h4>
            </article>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience