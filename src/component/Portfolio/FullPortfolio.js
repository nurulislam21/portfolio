import React from "react";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";

const FullPortfolio = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="Portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center">
            <h2>Portfolio</h2>
            {/* <h4>Here are some projects I'm proud of</h4> */}
          </div>

          <div className="content grid">
            {Portfolio_data.map((value, index) => (
              <Card
                key={index}
                image={value.image}
                category={value.category}
                totalLike={value.totalLike}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>

          <div className="text-center">
            <button className="btn_shadow" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FullPortfolio;
