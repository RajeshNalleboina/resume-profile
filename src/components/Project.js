import React from 'react'
import ProjectCard from './ProjectCard'
import {v4 as uuid} from 'uuid'

export default function Project() {
  const projects=[
    {
    title: "Touch a life",
    tech: 'React Js, MongoDB, Express JS',
    discription:`Touch-A-Life Foundation is a registered non-profit organization founded on the principle that helping others is good for society. It helps in different ways in the form of Donation Requests, Career Help, Plasma Donation, Covid Help. This helps us to provide different types of Donation requests. These Donation Requests can be done either offline or online. Donation Requests can be shared through WhatsApp, Facebook and Web. Career Help can provide assistance through Mentorship. Through this mentorship we connect mentor and mentee to get the complete assistance. We can also provide Plasma Donation Requests. In this tough times due to the pandemic, we provided Covid Help.`,
    projectLink: "#"
  },
  {
    title: "MyReads",
    tech: 'React Js',
    discription:`In this project, we created a React application from scratch 
    and utilize React components to manage the user interface. We created a virtual bookcase to 
    store your books and track what we were reading. Using the provided Books API, we search for
    books and add them to a bookshelf as a React component. Finally, I used React's setState to build 
    the functionality to move books from one shelf to another`,
    projectLink: "#"
  },
  {
    title: "Would you Rather",
    tech: 'React Js',
    discription:`Leverage the strengths of Redux to build a "Would You
    Rather" application in which users are given questions and must choose one of them.We build
    this dynamic application from scratch while combining the state management features of Redux
    and the component model of React. When complete, we are able to create your own sets of
    questions, choose between them, and keep track of question popularity`,
    projectLink: "#"
  },
  {
    title: "MobileFlashCards",
    tech: 'React Js',
    discription:`In this project, we use React Native to build a mobile flashcard 
    app. Users will not only be able to create custom cards and decks, but they are able to set up
    notifications to remind them to study. We will leverage React Native components,
    AsyncStorage, proper styling, as well as device APIs to create a fully dynamic experience.`,
    projectLink: "#"
  },
  {
    title: "VVIT BALOTSAV",
    tech: 'Android',
    discription:`VVIT Balotsav is an International Telugu Kids Festival. In 
    order to register for the events app is used and results 
    are visible in the application`,
    projectLink: "https://play.google.com/store/apps/details?id=app.balotsav.com.vvitbalotsav&hl=en_IN"
  }
]  
  return (
        <div className="container text-center my-5">
          <h1 className="font-weigth-light">
            My <span className="text-info">Projects</span>
          </h1>
          <div className="lead">Listing my projects as below</div>
          <div className="row my-5 pt-3 row text-center py-5 d-flex overflow-auto flex-nowrap scrollbar">
            {
              projects.map((projectData)=>(
            <div className="col-12 col-md-4 my-2" key={uuid()}>
                <ProjectCard title={projectData.title} description={projectData.discription} projectLink={projectData.projectLink} technology= { projectData.tech} />
            </div>
              ))
            }
            </div>
          </div>
         
    )
}
