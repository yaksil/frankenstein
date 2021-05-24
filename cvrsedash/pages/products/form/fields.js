export const schema = {
  fields: [
    {
      type: 'input',
      label: 'Название продукта',
      model: 'title',
      placeholder: 'Введите название продукта',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'vueMultiSelect',
      model: 'category_id',
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
      label: 'Стоимость',
      model: 'price',
      placeholder: 'Введите стоимость',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'textArea',
      label: 'Описание продукта',
      model: 'description',
      placeholder: 'Опишите продукт',
      hint: 'Max 500 characters',

      rows: 10,
      styleClasses: 'col-md-12',
    },
    {
      type: 'input',
      label: 'Количество',
      model: 'in_stock',
      placeholder: 'Введите кол-во доступных продуктов',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'input',
      label: 'Изображение',
      model: 'mainImage',
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
  in_stock: 0,
  mainImage: '',
  category_id: '',
}
