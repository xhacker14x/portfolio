import { portfolio } from "../../data";
import { PortfolioItem } from "../../components";
import { Categories } from "../../components";
import "./portfolio.css";
import { useState } from "react";

const allCategories = [
  "All",
  ...new Set(portfolio.map((item) => item.category)),
];

const Portfolio = () => {
  const [items, setItems] = useState(portfolio);
  const [currCat, setCurrCat] = useState("All");

  const filterItems = (category) => {
    if (category === "All") {
      setItems((current) => portfolio);
      setCurrCat(category);
      return;
    }
    const newItems = portfolio.filter((item) => item.category === category);
    setItems(newItems);
    setCurrCat(category);
  };

  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div className="portfolio__category">
        <Categories
          categories={allCategories}
          onFilter={filterItems}
          current={currCat}
        />
      </div>
      <div className="portfolio__container container grid">
        {items.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
