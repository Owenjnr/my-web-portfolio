import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "Key Projects",
  },
  {
    id: 2,
    name: "Branding",
  },
  {
    id: 3,
    name: "Creative",
  },
  {
    id: 4,
    name: "Design",
  },
  {
    id: 5,
    name: "Art",
  },
  {
    id: 6,
    name: "Development",
  },
];

const allData = [
  {
    id: 1,
    name: "Ninjart",
    category: ["creative", "design", "Art"],
    image: "images/portfolio/nin.jpg",
    slug: "ninjart",
  },
  {
    id: 2,
    name: "Central Spa",
    category: ["development", "design"],
    image: "images/portfolio/spa.jpg",
    slug: "spa",
  },
  {
    id: 3,
    name: "Avcal",
    category: ["branding", "development", "design"],
    image: "images/portfolio/avcal.jpg",
    slug: "avcal",
  },
  {
    id: 4,
    name: "Koana Consulting",
    category: ["branding", "development", "design"],
    image: "images/portfolio/koana.jpg",
    slug: "koana",
  },
  {
    id: 5,
    name: "Hitch",
    category: ["branding", "development", "design"],
    image: "images/portfolio/hitch.jpg",
    slug: "hitch",
  },
  {
    id: 6,
    name: "Primal Aero",
    category: ["design", "creative", "art"],
    image: "images/portfolio/primal.jpg",
    slug: "primal",
  },
  {
    id: 7,
    name: "Kunleade & Associates",
    category: ["creative", "design", "art"],
    image: "images/portfolio/kunade.jpg",
    slug: "kunleade-associates",
  },
  {
    id: 8,
    name: "The Varsity Date",
    category: ["creative", "design", "art"],
    image: "images/portfolio/tvd.jpg",
    slug: "tvd",
  },
  {
    id: 9,
    name: "Rechargeless",
    category: ["creative", "design", "art", "development"],
    image: "images/portfolio/recharge.jpg",
    slug: "recharge",
  },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    let tempData;
    if (targetFilter === filters[0].name.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        return (
          data.category.includes(targetFilter) && data.id <= dataVisibleCount
        );
      });
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

  return (
    <>
      <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>

      {noMorePost ? null : (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios;
