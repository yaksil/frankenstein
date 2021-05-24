export const config = {
  name: 'Мастера',
  crudName: 'artisans',
  singleName: 'мастера',
  pageName: 'ArtisanPage',
  formName: 'ArtisanForm',
  formTitle: 'Форма мастера',
}

export const columns = [{ key: 'cat_name', name: 'Название Категории' }]

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
    label: 'Удалить',
    emit: 'onDelete',
    actionKey: '_id',
  },
]
