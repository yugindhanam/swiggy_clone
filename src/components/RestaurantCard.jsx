function RestaurantCard({ name, rating, time, image }) {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} />

      <div className="card-content">
        <h3>{name}</h3>

        <p>⭐ {rating}</p>

        <p>{time}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;