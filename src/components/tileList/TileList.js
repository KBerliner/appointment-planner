import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {

  const data = Object.values(props)[0];

  return (
    <div>
      {data.map(
        (object, i) => {
          const { name, ...rest } = object;

          return <Tile key={i} name={name} description={rest} />
        })}
    </div>
  );
};
