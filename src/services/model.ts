export type Menu = MenuItem[]

export type MenuItem = string

export interface OrderItem {
  item: MenuItem;
  quantity: number;
}