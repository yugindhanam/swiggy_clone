function Hero() {
  return (
    <section className="hero">
      <p>
        Order food & groceries. Discover best restaurants. Swiggy it!
      </p>

      <img
        className="left-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
        alt="left_img"
      />

      <img
        className="right-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
        alt="right_img"
      />

      <input
        type="text"
        placeholder="Search for restaurants..."
      />

      <div className="food_card">
        <div className="card">
          <a
            href="https://www.swiggy.com/restaurants"
            title="Food"
          >
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
              alt="Food"
            />
          </a>
        </div>

        <div className="card">
          <a
            href="https://www.swiggy.com/instamart?entryId=1234"
            data-entry-id="1234"
            data-entry-name="mainTileEntry4"
          >
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
              alt="Instamart"
            />
          </a>
        </div>
        <div className="card">
  <a href="https://www.swiggy.com/dineout">
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
      alt="Dineout"
    />
  </a>
</div>
      </div>
    </section>
  );
}

export default Hero;