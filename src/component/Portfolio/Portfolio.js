
// import React, { useState } from "react";
// import "./Portfolio.css";
// import Card from "./Card";
// import Portfolio_data from "./Portfolio_data";

// const Portfolio = () => {
//   const [showFullPage, setShowFullPage] = useState(false);
//   const initialItems = 4; // Initially show 4 items

//   return (
//     <>
//       <section className="Portfolio top" id="portfolio">
//         <div className="container">
//           <div className="heading text-center">
//             <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
//             <h1>{showFullPage ? "Portfolio" : "Portfolio!"}</h1>
//           </div>

//           <div className="content grid">
//             {Portfolio_data
//               .slice(0, showFullPage ? Portfolio_data.length : initialItems)
//               .map((value, index) => (
//                 <Card
//                   key={index}
//                   image={value.image}
//                   category={value.category}
//                   totalLike={value.totalLike}
//                   title={value.title}
//                   description={value.description}
//                 />
//               ))}
//           </div>

//           <div className="text-center">
//             <button className="btn_shadow" onClick={() => setShowFullPage(!showFullPage)}>
//               {showFullPage ? "Go Back" : "See More"}
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Portfolio;

import React, { useState } from "react";
import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";

const Portfolio = () => {
  const [showFullPage, setShowFullPage] = useState(false);
  const initialItems = 4;

  return (
    <section
      className={`Portfolio ${showFullPage ? "full-page" : ""}`} // Add/remove class based on state
      id="portfolio"
    >
      <div className="container">
        <div className="heading text-center">
          <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
          <h1>{showFullPage ? "Full Portfolio" : "Portfolio"}</h1>
        </div>

        {/* Display ALL items in full-page mode */}
        <div className="content grid">
          {Portfolio_data.slice(0, showFullPage ? Portfolio_data.length : initialItems).map(
            (item, index) => (
              <Card key={index} {...item} />
            )
          )}
        </div>

        {/* Toggle button */}
        <div className="text-center">
          <button
            className="btn_shadow"
            onClick={() => setShowFullPage(!showFullPage)}
          >
            {showFullPage ? "Go Back" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;