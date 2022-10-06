import { derived, writable } from "svelte/store";

function createStore() {
    const store = writable<App.CartItem[]>([]);
    const store2 = derived(store, 
        $store => {
            const total = $store.reduce((acc, cur) => {
                acc += cur.price * cur.quantity
                return acc
            }, 0)
            return {
                items: $store,
                total
            }
        })

    function add(item: App.Item) {
        store.update($store => {
            const index = $store.findIndex(i => i.name == item.name);
            if (index == -1) {
                $store.push({
                    ...item,
                    quantity: 1
                })
            } else {
                $store[index].quantity++
            }
            return $store;
        })
    }
    
    function remove(item: App.Item) {
        store.update($store => {
            const index = $store.findIndex(i => i.name == item.name);
            $store[index].quantity--;
            if ($store[index].quantity == 0) {
                $store.splice(index, 1);
            }
            return $store;
        })
    }

    return {
        add,
        remove,
        subscribe: store2.subscribe
    }
}

const cart = createStore();

export default cart;