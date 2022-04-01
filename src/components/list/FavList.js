import React from "react";
import { CustomCard } from "../card/CustomCard";

export const FavList = ({ favList, removeFromFavList }) => {
  console.log(favList);
  return (
    <div>
      <h4>My Favorite Robot</h4>

      <div className="robot-list d-flex flex-wrap">
        {favList.map((nm, i) => {
          return (
            <CustomCard
              key={i}
              name={nm}
              title="Remove from the list"
              fun={removeFromFavList}
            />
          );
        })}
      </div>
    </div>
  );
};
