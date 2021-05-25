export const config = {
  name: 'Продукты',
  crudName: 'products',
  singleName: 'продукт',
  pageName: 'ProductPage',
  formName: 'ProductForm',
  formTitle: 'Форма продукта',
  formDescription: 'Укажите все необходимое для вашего продукта',
}

export const columns = [
  { key: '_id', name: 'ID' },
  { key: 'title', name: 'название' },
  { key: 'in_stock', name: 'количество' },
  { key: 'price', name: 'цена' },
  { key: 'available', name: 'доступен' },
]

export const actions = []
