import { FormEvent, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const NewMenuItem: React.FC = () => {
  const { loading, addToMenu } = useContext(AppContext);
  const [newMenuItem, setNewMenuItem] = useState("");

  const submitNewMenuItem = (e: FormEvent) => {
    e.preventDefault();
    addToMenu(newMenuItem);
  };

  const onChangeNewMenuItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMenuItem(e.target.value);
  };

  return (
    <form onSubmit={submitNewMenuItem}>
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
  );
};

export default NewMenuItem;
