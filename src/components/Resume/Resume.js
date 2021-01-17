import { Button, Container, Typography} from '@material-ui/core';
import React from 'react';
import resumeData from "../../resumeData";
import pdf from '../../images/resume/resume.pdf';
import useStyles from './style';


function Resume() {
  const classes = useStyles();
    return (
      <section id="resume">
      <Typography variant="h4" marked="center" align="center" component="h2">
        See my qualifications!
      </Typography>
          <Container className={classes.container}>
            <Button variant="contained" size="large">
                 <a href={pdf}>Download My Resume Here</a>
            </Button></Container>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Occupation</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization1}<br />
                          {item.specialization2}<br />
                          {item.specialization3}</p>
                          <p>
                          {item.Achievements1}<br />
                          {item.Achievements2}<br />
                          {item.Achievements3}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div> 
         </div>
         <div className="row education">
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">
   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <div className="row item">
                      <div className="twelve columns">
                         <h3>{item.Category}</h3>
                         <li className="info">
                         {item.skillname1}
                         {item.skillname2}
                         {item.skillname3}
                         {item.skillname4}
                         </li>
                      </div>
                   </div>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
  export default Resume;