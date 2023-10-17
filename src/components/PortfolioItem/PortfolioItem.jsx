import { useState } from "react";
import Close from "../../assets/close.svg";
import { BsEyeFill } from "react-icons/bs";
import parse from "html-react-parser";

const PortfolioItem = ({ img, category, details, title }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt={title} className="portfolio__img" />

      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">
          <BsEyeFill size={45} />
        </h3>
      </div>

      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={Close}
              alt="close"
              className="modal__close"
              onClick={toggleModal}
            />

            <h3 className="modal__title">{title}</h3>

            {category === "Graphics" ? (
              <>
                <ul className="modal__list grid-3">
                  {details.map(({ icon, title, desc }, index) => {
                    return (
                      <li className="modal__icon" key={index}>
                        <span className="item__icon">{icon}</span>

                        <div>
                          <span className="item__title">{title}</span>
                          <span className="item__details">{parse(desc)}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <img
                  src={img}
                  alt="actual image"
                  className={`${
                    details[0]["desc"] === "Flyer Design"
                      ? "modal__img w-small "
                      : "modal__img"
                  }`}
                />
              </>
            ) : (
              <ul className="modal__list grid">
                {details.map(({ icon, title, desc }, index) => {
                  return (
                    <li className="modal__icon" key={index}>
                      <span className="item__icon">{icon}</span>

                      <div>
                        <span className="item__title">{title}</span>
                        <span className="item__details">{parse(desc)}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
