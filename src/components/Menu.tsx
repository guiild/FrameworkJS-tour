import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import MenuItem from "./MenuItem";
import NewMenuItem from "./NewMenuItem";

const Menu: React.FC = () => {
  const { removeFromMenu, addToOrder, menuItems } = useContext(AppContext);

  return (
    <section className="menu">
      <h2>Menu</h2>
      <NewMenuItem />
      {menuItems.map((item) => (
        <MenuItem
          key={item}
          item={item}
          addToOrder={addToOrder}
          removeFromMenu={removeFromMenu}
        />
      ))}
    </section>
  );
};

export default Menu;
