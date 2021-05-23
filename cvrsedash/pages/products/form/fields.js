export const schema = {
  fields: [
    {
      type: 'input',
      label: 'Название игры',
      model: 'title',
      placeholder: 'Введите название игры',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'vueMultiSelect',
      model: 'category',
      label: 'Категория',
      styleClasses: 'col-md-6',
      placeholder: 'Добавить категорию',
      selectOptions: {
        multiple: false,
        key: 'title',
        id: '_id',
        trackBy: 'title',
        label: 'title',
        searchable: true,
        hideSelected: true,
      },
      values: [],
    },
    {
      type: 'input',
      label: 'Стоимость игры',
      model: 'price',
      placeholder: 'Введите стоимость игры',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'textArea',
      label: 'Описание игры',
      model: 'description',
      placeholder: 'Опишите игру',
      hint: 'Max 500 characters',

      rows: 10,
      styleClasses: 'col-md-12',
    },
    {
      type: 'input',
      label: 'Количество',
      model: 'amount',
      placeholder: 'Введите кол-во доступных продуктов',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'input',
      label: 'Изображение',
      model: 'imageUrl',
      placeholder: 'Введите ссылку на картинку',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
  ],
}

export const defaultForm = {
  title: '',
  description: '',
  price: 0,
  amount: 0,
  imageUrl: '',
  category: '',
}
