import React from "react";

const RatingStar = ({ ratings, styles = "" }) => {
    console.log(styles)
    let totalRatings = Number(ratings);
    let fullStarCount = 0;
    let halfStarCount = 0;
    let blankStarCount = 0;

    if(Number.isInteger(totalRatings)){
        fullStarCount = totalRatings;
        blankStarCount = 5 - totalRatings;
    }
    else{
        let fullStar = Math.trunc(totalRatings);
        let blankStar = 5 - Math.ceil(totalRatings);

        fullStarCount = fullStar
        halfStarCount = 1;
        blankStarCount = blankStar;
    }   

  return (
    <div className="flex items-center">
      {[...Array(fullStarCount)].map((rating) => (
        <i class={`fa-solid fa-star text-sm text-yellow-400 ${styles}`}></i>
      ))}

      {
        [...Array(halfStarCount)].map(rating => (
            <i class={`fa-solid fa-star-half-stroke text-sm text-yellow-400 ${styles}`}></i>
        ))
      }

      {
            [...Array(blankStarCount)].map(rating => (
                <i class={`fa-solid fa-star text-sm text-gray-400 ${styles}`}></i>
            ))
      }
    </div>
  );
};

export default RatingStar;
