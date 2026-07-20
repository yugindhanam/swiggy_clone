import categories from "../data/categories";

function Categories() {
  return (
    <section className="categories">
      <h2>What's on your mind?</h2>

      <div className="category-list">
        {categories.map((item, index) => (
          <div key={index} className="category-card">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;