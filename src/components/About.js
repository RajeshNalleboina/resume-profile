import React from 'react'

export default function About() {
    return (
        <div className="bg-light w-100">
  <div className="container text-center py-5">
    <h1 className="font-weight-light">
      <span className="text-info">About</span> me
    </h1>
    <div className="row">
      <div className="col-12 col-md-6 my-2 text-justify py-3">
        <h4 className="text-center">What i can do?</h4>
        <p>
          i can implement web application using front end technologies like htmls,css3,bootstrap, JavaScript as well as react js, Mobile application using Android.
        </p>
      </div>
      <div className="col-12 col-md-6 my-2 text-justify py-3">
        <h4 className="text-center">What am i doing currently?</h4>
        <p>
          I'm working as a React Js developet at TCS.
        </p>
      </div>
    </div>
    <div className=" d-flex justify-content-center">
      <div className="col-12 col-md-6 my-2 text-justify py-3">
        <h4 className="text-center">What do I belive in?</h4>
        <p>
          I believe my strength to learn new technologies and explore in the real time
        </p>
      </div>
      {/* <div className="col-12 col-md-6 my-2 text-justify py-3">
        <h4 className="text-center">How I can help you?</h4>
        <p>
          I'm doing we development using react js and i'm doing automation also.
        </p>
      </div> */}
    </div>

  </div>
</div>


    )
}
