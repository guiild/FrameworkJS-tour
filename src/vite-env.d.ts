/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace App {
    interface Item {
        name: string
        price: number
    }

    interface Header {
        key: string,
        title: string
    }

    interface CartItem extends Item {
        quantity: number
    }

    interface Cart {
        items: CartItem[],
        total: number
    }
}
