// import React from "react"
// import "./Portfolio.css"
// import Card from "./Card"
// import Portfolio_data from "./Portfolio_data"

// const Portfolio = () => {
//   return (
//     <>
//       <section className='Portfolio top' id='portfolio'>
//         <div className='container'>
//           <div className='heading text-center '>
//             <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
//             <h1>My scrapbook!</h1>
//           </div>

//           <div className='content grid'>
//             {Portfolio_data.map((value, index) => {
//               return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
//             })}

//             {/* <div className='box btn_shadow '>
//               <div className='img'>
//                   <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg' alt='' />
//               </div>
//               <div className='category d_flex'>
//                   <span>Development</span>
//                   <label>
//                     <i className='far fa-heart'></i> 360
//                   </label>
//               </div>
//               <div className='title'>
//                   <h2>Mobile app landing design & Services</h2>
//                 <a href='' className='arrow'>
//                   <i class='fas fa-arrow-right'></i>
//                 </a>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Portfolio
import React, { useState } from "react";
import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState(4); // Initially show 4 items

  const loadMore = () => {
    setVisibleItems((prevCount) => prevCount + 4); // Load 4 more items on each click
  };

  return (
    <>
      <section className="Portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center">
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My scrapbook!</h1>
          </div>

          <div className="content grid">
            {Portfolio_data.slice(0, visibleItems).map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  category={value.category}
                  totalLike={value.totalLike}
                  title={value.title}
                  description={value.description}
                />
              );
            })}

            {visibleItems < Portfolio_data.length && (
              <div className="load-more text-center">
                <button className="btn_shadow" onClick={loadMore}>
                  See More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
