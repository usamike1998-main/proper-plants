import plants from "./data.js";
import { useState } from "react";
import ShopCart from "./ShopCart";
import PlantListView from "./PlantListView";

export default function App() {
  const [cart, setCart] = useState([]);

  function onAddInCart(item) {
    const modifyedArr = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });

    setCart(modifyedArr);
  }

  function onSubstractInCart(item) {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: item.quantity - 1 };
      }
      return cartItem;
    });
    const filteredCart = newCart.filter((item) => item.quantity > 0);
    setCart(filteredCart);
  }

  function onAddItem(item) {
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);
    if (!itemInCart) {
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      const updatedCart = cart.map((updatedCartItem) => {
        if (updatedCartItem.id === item.id) {
          return { ...updatedCartItem, quantity: updatedCartItem.quantity + 1 };
        }
        return updatedCartItem;
      });
      setCart(updatedCart);
    }
  }

  return (
    <>
      <h1>ProperPlants</h1>
      <main>
        <PlantListView onAddItem={onAddItem} plants={plants}></PlantListView>
        <ShopCart
          cart={cart}
          onAddInCart={onAddInCart}
          onSubstractInCart={onSubstractInCart}
        ></ShopCart>
      </main>
    </>
  );
}
