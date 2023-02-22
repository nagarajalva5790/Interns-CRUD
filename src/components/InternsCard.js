import React from "react";
import user from "../images/user.png";

function InternsCard(props) {
  const { name, email, id } = props.intern;
  return (
    <div className="item">
      <image className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
}

export default InternsCard;
