import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function Body() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.67928239999999&lng=76.72932329999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await response.json();

    
      let restaurants = [];

      if (json?.data?.cards) {
      
        for (let card of json.data.cards) {
          const restData =
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (restData && Array.isArray(restData) && restData.length > 0) {
            restaurants = restData;
            break;
          }
        }
      }

      setRestaurantList(restaurants);
      setFilteredRestaurant(restaurants);
      setError(null);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
      setError(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchText.trim() === "") {
      setFilteredRestaurant(restaurantList);
      return;
    }

    const searchedRestaurant = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(searchedRestaurant);
  };

  const handleTopRated = () => {
    const filteredList = restaurantList.filter(
      (res) => parseFloat(res.info.avgRating) > 4.5
    );
    setFilteredRestaurant(filteredList);
  };

  const handleReset = () => {
    setSearchText("");
    setFilteredRestaurant(restaurantList);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button onClick={fetchData}>Try Again</button>
      </div>
    );
  }

  if (restaurantList.length === 0) {
    return (
      <div className="no-restaurants">
        <h2>No restaurants found</h2>
        <button onClick={fetchData}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress}
          />

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>

        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated (4.5+)
        </button>

        <button className="filter-btn" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className="results-info">
        <p>Showing {filteredRestaurant.length} restaurants</p>
      </div>

      <div className="res-container">
        {filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((res) => (
            <RestaurantCard key={res.info.id} resData={res.info} />
          ))
        ) : (
          <div className="no-results">
            <p>No restaurants match your search. Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Body;