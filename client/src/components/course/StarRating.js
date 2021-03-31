import React from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = (props) => {
  return (
    <div>
      <StarRatings
        starRatedColor='gold'
        numberOfStars={5}
        name='rating'
        starDimension='25px'
        rating={parseInt(props.ratings)}
      />
    </div>
  );
};

export default StarRating;
