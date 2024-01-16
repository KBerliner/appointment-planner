import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className={'tile-title'}>{name}</p>
      {Object.values(description).map((value, i) => <p key={i} className="tile">{value}</p>)}
    </div>
  );
};
