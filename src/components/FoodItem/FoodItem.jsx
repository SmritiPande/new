import { useContext } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";
import { CiCirclePlus } from "react-icons/ci";
//import { FaPlus } from "react-icons/fa6";
import { CiCircleMinus } from "react-icons/ci";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        <br />
        <div className="gola">
          {!cartItems[id] ? (
            <CiCirclePlus className="add" onClick={() => addToCart(id)} />
          ) : (
            <div className="food-item-counter">
              <CiCircleMinus
                className="minus"
                onClick={() => removeFromCart(id)}
              />
              <p>{cartItems[id]}</p>
              <CiCirclePlus className="plus" onClick={() => addToCart(id)} />
            </div>
          )}
        </div>
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <h4>⭐⭐⭐⭐</h4>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
