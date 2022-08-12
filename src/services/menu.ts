const DEFAULT_MENU = ["Chouffe", "Mont blanc", "Cuvée", "Triple K"];
const LOCAL_STORAGE_KEY = "menuItems";

const saveLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const getLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

export const listMenuItems: () => string[] = () => {
    const menuItems = getLocalStorage(LOCAL_STORAGE_KEY);
    if (menuItems) {
        return menuItems;
    } else {
        saveLocalStorage(LOCAL_STORAGE_KEY, DEFAULT_MENU);
        return [];
    }
}

export const addMenuItem: (item: string) => void = (item: string) => {
    const menuItems = listMenuItems();
    menuItems.push(item);
    saveLocalStorage(LOCAL_STORAGE_KEY, menuItems);
}

export const removeMenuItem: (item: string) => void = (item: string) => {
    const menuItems = listMenuItems();
    const index = menuItems.indexOf(item);
    if (index > -1) {
        menuItems.splice(index, 1);
        saveLocalStorage(LOCAL_STORAGE_KEY, menuItems);
    }
}