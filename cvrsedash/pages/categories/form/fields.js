export const schema = {
  fields: [
    {
      type: 'input',
      label: 'Название категории',
      model: 'cat_name',
      placeholder: 'Введите название Категории',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'vueMultiSelect',
      model: 'product_inventory',
      label: 'Продукты',
      styleClasses: 'col-md-6',
      placeholder: 'Добавить продукты',
      selectOptions: {
        multiple: true,
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
      label: 'Ссылка на картинку',
      model: 'thumbnail',
      placeholder: 'Вставьте ссылку на картинку',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'textArea',
      label: 'Описание категории',
      model: 'cat_desc',
      placeholder: 'Введи описание категории',
      // hint: 'Максимально 500 символов',
      rows: 10,
      styleClasses: 'col-md-12',
    },
  ],
}

export const defaultForm = {
  cat_name: '',
  // product_inventory: [],
  cat_desc: '',
}
