import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioModel from "./PortfolioModel";
import Portfolioitems from "../../data_comp/Portfolioitems";
import Divider from "../../shared_comp/Divider";

const Portfolio = () => {
  const [show, setShow] = useState(null);

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        <div className="divider-custom">
          <Divider />
        </div>
        <div className="row justify-content-center">
          {Portfolioitems.map((items, index) => {
            return (
              <PortfolioItem
                key={index}
                image={items.image}
                modelID={items.modelID}
                setShow={setShow}
                item={items.id}
              />
            );
          })}
        </div>
      </div>
      {Portfolioitems.map((items, index) => {
        return (
          <PortfolioModel
            key={index}
            image={items.image}
            title={items.title}
            modelID={items.modelID}
            show={show}
            item={items.id}
            setShow={setShow}
          />
        );
      })}
    </section>
  );
};

export default Portfolio;
