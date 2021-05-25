export const config = {
  name: 'Пользователи',
  crudName: 'users',
  singleName: 'мастера',
  pageName: 'UserPage',
  formName: 'UserForm',
  formTitle: 'Форма пользователя',
}

export const columns = [
  { key: 'email', name: 'почта' },
  { key: 'fullname', name: 'имя пользователя' },
  { key: 'phone', name: 'номер телефона' },
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
