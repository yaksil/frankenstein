export const config = {
  name: 'Заказы',
  crudName: 'orders',
  singleName: 'Заказ',
  pageName: 'OrderPage',
}

export const columns = [
  { key: 'item', name: 'ID продукта' },
  { key: 'state', name: 'состояние' },
  { key: 'total', name: 'сумма' },
  { key: 'namesake', name: 'имя получателя' },
  { key: 'shipping', name: 'адрес доставки' },
]

export const actions = [
  {
    bg: 'red',
    color: 'white',
    label: 'Удалить',
    emit: 'onDelete',
    actionKey: '_id',
  },
]
