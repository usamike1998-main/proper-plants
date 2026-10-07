export default function PlantListView({ plants, onAddItem }) {
  const plantItems = plants.map((plant) => {
    return (
      <li key={plant.id}>
        <h3>{plant.name}</h3>
        <span>{plant.image}</span>
        <button onClick={onAddItem(plant.id)}>Add to Cart</button>
      </li>
    );
  });

  return (
    <div>
      <h2>Plants</h2>
      <ul>{plantItems}</ul>
    </div>
  );
}
