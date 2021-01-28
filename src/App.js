import "./App.css";
import React, { useState } from "react";
import Main from "./Main";
import Filter from "./Filter";
import HamburgerMenu from "react-hamburger-menu";

const App = () => {
  const [date, setDate] = useState("");
  const [battingPref, setBattingPref] = useState("");
  const [bowlingPref, setBowlingPref] = useState("");
  const [country, setCountry] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forcePage, setForcePage] = useState(0);
  const [open,  setOpen] = useState( visualViewport.width < 800 ? false : true );

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <Main
        date={date}
        battingPref={battingPref}
        bowlingPref={bowlingPref}
        country={country}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        offset={offset}
        setOffset={setOffset}
        forcePage={forcePage}
        setForcePage={setForcePage}
      />
      <Filter
        setDate={setDate}
        setBattingPref={setBattingPref}
        setBowlingPref={setBowlingPref}
        setCountry={setCountry}
        setCurrentPage={setCurrentPage}
        setOffset={setOffset}
        setForcePage={setForcePage}
        open={open}
        setOpen={setOpen}
      />
      <HamburgerMenu
        isOpen={open}
        menuClicked={handleClick}
        width={25}
        height={15}
        strokeWidth={3}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
        className={"hamburger"}
      />
    </div>
  );
};

export default App;
