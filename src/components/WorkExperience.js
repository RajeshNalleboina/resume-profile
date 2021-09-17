import React from 'react'
import {v4 as uuid} from 'uuid'

const WorkExperience = () => {
    const exp = [
        {
            comp:`Working as a React JS Developer in TATA CONSULTANCY SERVICES from November 2020 to till 
            Date` 
        }
    ]
    return (
        <div className="container text-center my-5">
          <h1 className="font-weigth-light">
            My <span className="text-info">Working Experience</span>
          </h1>
          <div className="">
            {
              exp.map((e)=>(
            <div className="row" key={uuid()}>
                <li>{e.comp}</li>
            </div>
              ))
            }
            </div>
          </div>
    )
}

export default WorkExperience;
