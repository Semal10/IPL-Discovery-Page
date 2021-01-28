import React from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      <h2>{props.item.Player_Name}</h2>
      <hr className="separator" />
      <p>Batting : {props.item.Batting_Hand}</p>
      <p>Bowling : {props.item.Bowling_Skill}</p>
      <p className="country">Country : {props.item.Country}</p>
      <p className="dob2">{props.item.DOB}</p>
    </div>
  );
};

export default Card;
