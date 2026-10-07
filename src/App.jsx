import { plants as PLANTS } from "data.js";
import useState from "react";
import ShopCart from "./ShopCart";
import PlantListView from "./PlantListView";

export default function App() {
  const [cart, setCart] = useState([]);
  function onAddItem(item) {}
  return (
    <>
      <h1>ProperPlants</h1>
      <PlantListView onAddItem={onAddItem} plants={PLANTS}></PlantListView>
      <ShopCart cart={cart} onCartChange={setCart}></ShopCart>
    </>
  );
}
