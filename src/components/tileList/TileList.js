import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ contacts }) => {

  return (
    <div>
      {contacts.map(
        (contact, i) => {
          const { name, ...rest } = contact;

          return <Tile key={i} name={name} description={rest} />
        })}
    </div>
  );
};
