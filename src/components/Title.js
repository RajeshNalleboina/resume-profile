import React from 'react'
import Sravya from '../assets/sravya1.jpg'

export default function Title({name,lead}) {
    return (
        <div className="container">
      <div className="row text-center align-item-center my-5">
        <div className="col-12 col-md-6 mt-5">
          <img
            src={Sravya}
            alt="my image"
            className="img-fluid rounded-circle w-70"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{fontSize: "50px"}}>
    Hi, I am <span className="text-info">{name}</span>
          </div>
    <h4 className="font-weight-light">{lead}</h4>
        </div>
      </div>
    </div>
    )
}
