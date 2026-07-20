import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import RestaurantList from "./components/RestaurantList";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <RestaurantList />
      <Footer />
    </>
  );
}

export default App;