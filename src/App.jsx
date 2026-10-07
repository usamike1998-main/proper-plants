import { plants as PLANTS } from "data.js";
import useState from "react";
import ShopCart from "./ShopCart";
import PlantListView from "./PlantListView";

export default function App() {
  const [cart, setCart] = useState([]);
  function onAddInCart(item) {
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
      setCart(...cart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  function onSubstractInCart(item) {
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);
    item.quantity--;
    if (item.quantity <= 0) {
      const updatedArr = cart.filter((cartItem) => cartItem.id !== item.id);
      setCart([...updatedArr]);
    } else {
      setCart(...cart);
    }
  }

  return (
    <>
      <h1>ProperPlants</h1>
      <PlantListView onAddItem={onAddItem} plants={PLANTS}></PlantListView>
      <ShopCart
        cart={cart}
        onAddInCart={onAddInCart}
        onSubstractInCart={onSubstractInCart}
      ></ShopCart>
    </>
  );
}
