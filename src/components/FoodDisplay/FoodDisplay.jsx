import { useContext } from "react";
import "./FoodDisplay.css";
<<<<<<< HEAD
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { Food_list } = useContext(StoreContext);
  console.log(Food_list);

=======
import {StoreContext} from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = () => {
  const {Food_list} = useContext(StoreContext);
  console.log(Food_list);
>>>>>>> origin/main
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
<<<<<<< HEAD
        {Food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
=======
        {Food_list.map((index, item) => {
          return (
            <FoodItem
              key={item.name+item.description}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
>>>>>>> origin/main
        })}
        {/*  {Food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}*/}
      </div>
    </div>
  );
};

export default FoodDisplay;
