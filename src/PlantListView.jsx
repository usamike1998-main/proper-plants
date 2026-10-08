import PlantItem from "./PlantItem";

export default function PlantListView({ plants, onAddItem }) {
  const plantItems = plants.map((plant) => {
    return <PlantItem onAddItem={onAddItem} key={plant.id} plant={plant} />;
  });

  return (
    <div>
      <h2>Plants</h2>
      <ul>{plantItems}</ul>
    </div>
  );
}
