import React from "react";
import ReactDOM from "react-dom/client";
import data from "./ResData.json"; // Ensure this file exists in the correct path

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/burger-cheese-with-fire-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-premium_138676-5539.jpg?w=826&t=st=1695148160~exp=1695148760~hmac=15fbe29d7fb2f694e05ac95449f779d2228e6c1f46233dfd51c55f3bf5db4bdc"
          alt="logo"
        />
      </div>
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
}

const RestaurantCard = ({ item }) => {
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } = item;

  const imgsrc = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

  return (
    <div className="res-card">
      <img className="res-logo" src={imgsrc} alt={name} />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-rating">{avgRating}</h4>
      <div className="res-items">{cuisines.join(", ")}</div>
      <div className="res-location">{areaName}</div>
    </div>
  );
};

const Body = () => {
  const resData = data?.resData;

  if (!Array.isArray(resData) || resData.length === 0) {
    return <p>No restaurant data available.</p>;
  }

  return (
    <div className="body">
      <div className="res-container">
        {resData.map((item) => (
          <RestaurantCard key={item.info.id} item={item.info} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
