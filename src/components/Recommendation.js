import React from 'react'
import RecommendationCards from './RecommendationCard'
import {v4 as uuid} from 'uuid'

function Recommendation() {
    var recommendations=[
        {
            domain:"Coursera",
            spelization:"Deep Learning Specialisation",
        },
        {
            domain:"Udacity",
            spelization:`Android Developer Nanodegree, React Developer Nanodegree, Machine Learning Engineer`,
        },
        {
            domain:"NPTEL",
            spelization: `Programming, Data Structures, and Algorithms using Python
            R software, 
            Problem-Solving through programming in C & JAVA, 
            Database Management Systems`,
        }
    ]
   
    return (
    <div className="container-fluid my-5">
        <h1 className="font-weigth-light">
            My <span className="text-info">Certifications & Achievements</span>
          </h1>
      <div className="row text-center py-5 d-flex overflow-auto flex-nowrap scrollbar">
        {recommendations.map((rec)=>(
               <div className="col-12 col-md-4" key={uuid()}>
                   <RecommendationCards cardsData={rec} />
             </div>
        ))}
     
        </div>
        </div>
    )
}

export default Recommendation;
