const OrderItem: React.FC<{
  item: string;
  count: number;
  removeFromOrder: (item: string) => void;
}> = ({ item, count, removeFromOrder }) => {
  return (
    <div className="list-item">
      <span>{item}</span>
      {count}
      <button onClick={() => removeFromOrder(item)}>remove</button>
    </div>
  );
};

export default OrderItem;
