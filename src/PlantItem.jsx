export default function PlantItem({ plant, onAddItem }) {
  return (
    <li className="plantItem">
      <h3>{plant.name}</h3>
      <span className="plantItem__image">{plant.image}</span>
      <button onClick={() => onAddItem(plant)}>Add to Cart</button>
    </li>
  );
}
