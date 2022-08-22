import "./App.css";
import { FormEvent, useEffect, useState } from "react";
import { addMenuItem, listMenuItems, removeMenuItem } from "./services/menu";

function App() {
  const [newMenuItem, setNewMenuItem] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState<string[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Record<string, number>>({});

  const onChangeNewMenuItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMenuItem(e.target.value);
  };

  const fetchMenuItems = async () => {
    setLoading(true);
    try {
      const menuItems = await listMenuItems();
      setMenuItems(menuItems);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const handleSubmitNewMenuItem = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addMenuItem(newMenuItem);
      await fetchMenuItems();
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
    setNewMenuItem("");
  };

  const handleRemoveMenuItem = async (menuItem: string) => {
    setLoading(true);
    try {
      await removeMenuItem(menuItem);
      await fetchMenuItems();
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const handleAddToOrder = (newItemCommand: string) => {
    setCurrentOrder((prev) => {
      if (prev[newItemCommand]) {
        return {
          ...prev,
          [newItemCommand]: prev[newItemCommand] + 1,
        };
      } else {
        return {
          ...prev,
          [newItemCommand]: 1,
        };
      }
    });
  };

  const handleRemoveFromOrder = (itemToRemove: string) => {
    setCurrentOrder((prev) => {
      if (prev[itemToRemove] === 1) {
        const newOrder = { ...prev };
        delete newOrder[itemToRemove];
        return newOrder;
      } else {
        return {
          ...prev,
          [itemToRemove]: prev[itemToRemove] - 1,
        };
      }
    });
  };

  const handleClearOrder = () => {
    setCurrentOrder({});
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  return (
    <div className="App">
      <h1>Framework JS Tour</h1>
      <h2>React</h2>
      <section className="menu">
        <form onSubmit={handleSubmitNewMenuItem}>
          <input
            type="text"
            id="new-menu-input"
            disabled={loading}
            placeholder="New menu item"
            required
            value={newMenuItem}
            onChange={onChangeNewMenuItem}
          />
          <button type="submit">Add</button>
        </form>
        {menuItems.map((item) => (
          <div className="list-item" key={item}>
            <span>{item}</span>
            <button onClick={() => handleAddToOrder(item)}>Add</button>
            <button onClick={() => handleRemoveMenuItem(item)}>Delete</button>
          </div>
        ))}
      </section>
      <section className="command">
        <h2>Current command</h2>
        {Object.keys(currentOrder).map((item) => (
          <div className="list-item" key={item}>
            <span>{item}</span>
            {currentOrder[item]}
            <button onClick={() => handleRemoveFromOrder(item)}>remove</button>
          </div>
        ))}

        <button onClick={handleClearOrder}>Send order</button>
      </section>
    </div>
  );
}

export default App;
