export const config = {
  name: 'Категории',
  crudName: 'categories',
  singleName: 'категорию',
  pageName: 'CategoryPage',
  formName: 'CategoryForm',
  formTitle: 'Форма Категории',
}

export const columns = [
  { key: 'cat_name', name: 'Название' },
  { key: 'cat_desc', name: 'Описание' },
]

export const actions = [
  {
    bg: 'teal',
    color: 'white',
    label: 'Изменить',
    emit: 'onEdit',
    actionKey: '_id',
  },
  {
    bg: 'red',
    color: 'white',
    label: 'Удалить',
    emit: 'onDelete',
    actionKey: '_id',
  },
]
