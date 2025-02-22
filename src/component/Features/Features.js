import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"

const Features = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h1>Things I do</h1>
            <h4>I do everything that falls in between these lines.</h4>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}

            {/* <div className='box btn_shadow'>
              <img src='https://img.icons8.com/glyph-neue/64/000000/polyline.png' alt='' />
              <h2>Personal Portfolio April</h2>
              <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
              <a href='0'>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
