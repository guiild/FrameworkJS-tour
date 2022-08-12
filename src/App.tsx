import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import { addMenuItem, listMenuItems, removeMenuItem } from "./services/menu";

function App() {
  const [newMenuItem, setNewMenuItem] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState<string[]>([]);

  const onChangeNewMenuItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMenuItem(e.target.value);
  };

  const handleSubmitNewMenuItem = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    addMenuItem(newMenuItem);
    setMenuItems(listMenuItems());
    setLoading(false);
    setNewMenuItem("");
  };

  const handleRemoveMenuItem = (menuItem: string) => {
    setLoading(true);
    removeMenuItem(menuItem);
    setMenuItems(listMenuItems());
    setLoading(false);
  };

  useEffect(() => {
    setMenuItems(listMenuItems());
  }, []);

  return (
    <div className="App">
      <h1>Multi App</h1>
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
        <ul>
          {menuItems.map((item) => (
            <li key={item} onClick={() => handleRemoveMenuItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className="command"></section>
    </div>
  );
}

export default App;
