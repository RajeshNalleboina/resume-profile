import React from 'react'
import {v4 as uuid} from 'uuid'

const ProfessionalSummary = ( ) => {
  const professional = [
    {
      prof: 'As a software professional in building wide variety of web, front-end and desktop professional for various industries'
    },
    {
      prof:'Good working knowledge on React, Redux, JavaScript, HTML,CSS'
    },
    {
      prof: 'Strong proficiency in JavaScript, including DOM manipulation'
    },
    {
      prof: 'Extensive knowledge in developing Single-Page Applications (SPAs)'
    },
    {
      prof: 'Building reusable components and front-end libraries for future use'
    },
    {
      prof: 'Experience with common front-end development tools such as Babel, NPM, etc'
    },
    {
      prof: 'An effective communicator with good attitude, strong problem solving, flexible, team handling, honest and client servicing skills'
    },
    {
      prof: 'Exposed to hands-on awareness of Mobile applications'
    },
    {
      prof: 'Expert at SDK design functionality, including the full activity lifecycle of an Android Application, Core Java'
    },
    {prof: 'Built Android apps with back-end API integration to improve the user experience, Conceptualised, developed the different Android Applications'}

  ]
    return (
        <div className="container text-center my-5">
          <h2 className="font-weigth-light">
            My <span className="text-info">Professional Summary</span>
          </h2>
          <div className="">
            {
              professional.map((e)=>(
            <div className="row" key={uuid()}>
                <li>{e.prof}</li>
            </div>
              ))
            }
            </div>
          </div>
    )
}

export default ProfessionalSummary;
