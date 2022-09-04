import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import OrderItem from "./OrderItem";

const Order: React.FC = () => {
  const { currentOrder, removeFromOrder, sendOrder } = useContext(AppContext);
  return (
    <section className="order">
      <h2>Order</h2>
      {Object.keys(currentOrder).map((item) => (
        <OrderItem
          removeFromOrder={removeFromOrder}
          item={item}
          count={currentOrder[item]}
        />
      ))}

      <button onClick={sendOrder}>Send order</button>
    </section>
  );
};

export default Order;
