import RestaurantCard from "./RestaurantCard";
import restaurants from "../data/restaurants";

function RestaurantList() {
  return (
    <section className="restaurants">
      <h2>Top Restaurants</h2>

      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            {...restaurant}
          />
        ))}
      </div>
    </section>
  );
}

export default RestaurantList;