export default function PlantItem({ plant, onAddItem }) {
  return (
    <li className="plant___item">
      <h3>{plant.name}</h3>
      <span>{plant.image}</span>
      <button onClick={() => onAddItem(plant)}>Add to Cart</button>
    </li>
  );
}
