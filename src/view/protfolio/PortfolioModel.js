import React from "react";
import Divider from "../../shared_comp/Divider";

const PortfolioModel = ({
  key,
  image,
  title,
  modelID,
  show,
  item,
  setShow,
}) => {
  return (
    <div
      className={
        show === item
          ? "portfolio-modal modal fade show"
          : "portfolio-modal modal fade"
      }
      id={modelID}
      tabindex="-1"
      aria-labelledby={modelID}
      aria-hidden="true"
      key={key}
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button
              className="btn-close"
              type="button"
              onClick={() => setShow(null)}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                    {title}
                  </h2>

                  <div className="divider-custom">
                    <Divider />
                  </div>

                  <img
                    className="img-fluid rounded mb-5"
                    src={image}
                    alt="..."
                  />

                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={() => setShow(null)}
                  >
                    <i className="fas fa-xmark fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModel;
