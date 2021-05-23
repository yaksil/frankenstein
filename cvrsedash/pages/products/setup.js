export const config = {
  name: 'Продукты',
  crudName: 'products',
  singleName: 'Продукт',
  pageName: 'ProductPage',
  formName: 'ProductForm',
  formTitle: 'Форма продукта',
  formDescription: 'Укажите все необходимое для вашего продукта',
}

export const columns = [
  { key: 'title', name: 'название' },
  { key: 'in_stock', name: 'количество' },
  { key: 'price', name: 'цена' },
  { key: 'available', name: 'доступен' },
]

export const actions = [
  {
    bg: 'yellow',
    color: 'white',
    label: 'Изменить',
    emit: 'onEdit',
    actionKey: '_id',
  },
  {
    bg: 'red',
    color: 'white',
    emit: 'onDelete',
    actionKey: '_id',
    icon: 'icwt-delete',
  },
]
