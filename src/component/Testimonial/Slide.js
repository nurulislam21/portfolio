import React from "react"

const Slide = ({ id, image, design, name, offcer, post, date, desc, valueIndex, index }) => {
  let position = "nextSlide"
  if (valueIndex === index) {
    position = "activeSlide"
  }
  if (valueIndex === index - 1 || (index === 0 && valueIndex > 0 && valueIndex === index - 1)) {
    position = "lastSlide"
  }
  // Ensures smooth infinite looping visually
  if (index === 0 && valueIndex === 3) {
      position = "lastSlide"
  }

  return (
    <article className={`testimonial-slide ${position}`} key={id}>
      
      {/* Left Panel: Client Identity */}
      <div className='left-panel tech-panel'>
        <div className="panel-bracket top-left"></div>
        <div className="panel-bracket bottom-right"></div>

        <div className='client-img'>
          <img src={image} alt={name} />
        </div>
        <div className='client-details'>
          <span className='tech-badge'>{design}</span>
          <h2>{name}</h2>
          <label>{offcer}</label>
        </div>
      </div>

      {/* Right Panel: The Feedback Data */}
      <div className='right-panel tech-panel'>
        <div className="panel-bracket top-left"></div>
        <div className="panel-bracket bottom-right"></div>

        <div className='quote-header'>
          <div className='quote-meta'>
            <h1>{post}</h1>
            <h3><i className="far fa-clock" style={{marginRight: '6px'}}></i> {date}</h3>
          </div>
          <div className='quote-icon'>
            <i className="fas fa-quote-right"></i>
          </div>
        </div>
        <div className='quote-divider'></div>
        <p className="quote-text">"{desc}"</p>
      </div>

    </article>
  )
}

export default Slide