import React, { useState, useEffect } from "react"
import "./Testimonial.css"
import Slide from "./Slide"
import TestimonialApi from "./TestimonialApi"

const Testimonial = () => {
  // PRO FIX: Removed 'setdata' to clear the ESLint 'unused variable' warning
  const [data] = useState(TestimonialApi)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = data.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, data])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000) 
    return () => clearInterval(slider)
  }, [index])

  return (
    <>
      <section className='Testimonial top' id='clients'>
        <div className='container'>
          
          <div className='heading text-center' data-aos="fade-up">
            <h4>VERIFIED FEEDBACK & ENDORSEMENTS</h4>
            <h1>Client Telemetry</h1>
          </div>
          
          <div className='slide-wrapper' data-aos="fade-up">
            <div className='slide-container'>
              {data.map((value, valueIndex) => {
                return <Slide key={value.id} {...value} valueIndex={valueIndex} index={index} />
              })}
            </div>

            {/* Tech Slider Controls */}
            <div className='slide_button'>
              <button className='pro-btn icon-btn' onClick={() => setIndex(index - 1)} aria-label="Previous Review">
                <i className='fas fa-chevron-left'></i>
              </button>
              <button className='pro-btn icon-btn' onClick={() => setIndex(index + 1)} aria-label="Next Review">
                <i className='fas fa-chevron-right'></i>
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Testimonial