import React from "react";

function RestaurantCard({ resData }) {
  const {
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    costForTwo,
    areaName,
  } = resData;

  return (
    <div className="res-card">
      <img
        className="res-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
        alt="restaurant"
      />

      <h3>{name}</h3>

      <div className="card-details">
        <h4>{cuisines.join(", ")}</h4>
        <h4>⭐ {avgRating}</h4>
        <h4>{sla.deliveryTime} mins</h4>
        <h4>{costForTwo}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;