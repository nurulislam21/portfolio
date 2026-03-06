import React, { useState, useEffect } from "react"
import "./Testimonial.css"
import Slide from "./Slide"
import TestimonialApi from "./TestimonialApi"

const Testimonial = () => {
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
    }, 6000) // Slightly longer to give recruiters time to read
    return () => clearInterval(slider)
  }, [index])

  return (
    <>
      <section className='Testimonial top' id='clients'>
        <div className='container'>
          
          <div className='heading text-center' data-aos="fade-up">
            <h4 className="section-subtitle" style={{ justifyContent: 'center' }}>VERIFIED FEEDBACK & ENDORSEMENTS //</h4>
            <h1 className="section-title">System Testimonials</h1>
          </div>
          
          <div className='slide-wrapper' data-aos="fade-up" data-aos-delay="100">
            <div className='slide-container'>
              {data.map((value, valueIndex) => {
                return <Slide key={value.id} {...value} valueIndex={valueIndex} index={index} />
              })}
            </div>

            {/* Tactile Hardware Controls */}
            <div className='slide_button'>
              <button className='control-btn' onClick={() => setIndex(index - 1)} aria-label="Previous Review">
                <i className='fas fa-chevron-left'></i>
              </button>
              <button className='control-btn' onClick={() => setIndex(index + 1)} aria-label="Next Review">
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