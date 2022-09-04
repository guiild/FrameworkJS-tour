import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { addMenuItem, listMenuItems, removeMenuItem } from "../services/menu";

export interface AppContextInterface {
  loading: boolean;
  menuItems: string[];
  currentOrder: Record<string, number>;
  addToMenu: (newItem: string) => void;
  removeFromMenu: (item: string) => void;
  addToOrder: (newItem: string) => void;
  removeFromOrder: (item: string) => void;
  sendOrder: () => void;
}

export const AppContext = createContext<AppContextInterface>({
  loading: false,
  menuItems: [],
  currentOrder: {},
  addToMenu: () => {},
  removeFromMenu: () => {},
  addToOrder: () => {},
  removeFromOrder: () => {},
  sendOrder: () => {},
});

export const AppContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [menuItems, setMenuItems] = useState<string[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Record<string, number>>({});

  const [loading, setLoading] = useState(false);

  const fetchMenuItems = async () => {
    setLoading(true);
    try {
      const menuItems = await listMenuItems();
      setMenuItems(menuItems);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const addToMenu = async (newMenuItem: string) => {
    setLoading(true);
    try {
      await addMenuItem(newMenuItem);
      await fetchMenuItems();
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const removeFromMenu = async (menuItem: string) => {
    setLoading(true);
    try {
      await removeMenuItem(menuItem);
      await fetchMenuItems();
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const addToOrder = (newItemCommand: string) => {
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

  const removeFromOrder = (itemToRemove: string) => {
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

  const sendOrder = () => {
    setCurrentOrder({});
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        menuItems,
        currentOrder,
        addToMenu,
        removeFromMenu,
        addToOrder,
        removeFromOrder,
        sendOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
