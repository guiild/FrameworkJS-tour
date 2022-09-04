const MenuItem: React.FC<{
  item: string;
  addToOrder: (item: string) => void;
  removeFromMenu: (item: string) => void;
}> = ({ item, addToOrder, removeFromMenu }) => {
  return (
    <div className="list-item">
      <span>{item}</span>
      <button onClick={() => addToOrder(item)}>Add</button>
      <button onClick={() => removeFromMenu(item)}>Delete</button>
    </div>
  );
};

export default MenuItem;
