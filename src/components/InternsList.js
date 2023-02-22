import React from "react";
import InternsCard from "./InternsCard";

const InternList = (props) => {
  const deleteClickHandler = (id) => {
    props.getInternId(id);
  };
  const renderInternsCard = props.internsObj.map((intern) => {
    return (
      <InternsCard
        intern={intern}
        key={intern.id}
        clickHandler={deleteClickHandler}
      />
    );
  });
  return <div className="ui celled list">{renderInternsCard}</div>;
};

export default InternList;
