import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Card from "./Card";

const Main = ({
  date,
  battingPref,
  bowlingPref,
  country,
  currentPage,
  setCurrentPage,
  offset,
  setOffset,
  forcePage,
  setForcePage,
}) => {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [flag, setFlag] = useState(false);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
    window.scrollTo(0, 0);
  };

  const PER_PAGE = 30;
  setOffset(currentPage * PER_PAGE);

  if (searchTerm !== "") {
    if (!flag) {
      const btn = document.querySelector(`[aria-label*="Page 1"]`);
      if (btn != null) btn.click();
      setFlag(true);
    }
  }

  const filteredData = list.filter((val) => {
    if (
      (date === "" || val.DOB === date) &&
      (battingPref === "" || battingPref === val.Batting_Hand) &&
      (bowlingPref === "" || bowlingPref === val.Bowling_Skill) &&
      (country === "" || country === val.Country) &&
      (searchTerm === "" ||
        val.Player_Name.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return val;
    }
  });
  const currentPageData = filteredData
    .slice(offset, offset + PER_PAGE)
    .map((item) => <Card item={item} />);
  const pageCount = Math.ceil(filteredData.length / PER_PAGE);

  useEffect(() => {
    const data = require("./data.json");
    setList(data.players);
  }, []);

  useEffect(() => {
    setFlag(false);
  }, [searchTerm]);

  return (
    <div class="main-side">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <span class="material-icons"> search </span>
      <div className="cards">
        {currentPageData.length > 0 ? (
          currentPageData
        ) : (
          <>
            <h1>No Results Found, Try Again!</h1>
          </>
        )}
      </div>
      <ReactPaginate
        previousLabel={"←Prev"}
        nextLabel={"Next→"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        initialPage={forcePage}
      />
    </div>
  );
};

export default Main;
