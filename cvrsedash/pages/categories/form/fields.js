export const schema = {
  fields: [
    {
      type: 'input',
      inputType: 'input',
      label: 'cat_name',
      model: 'cat_name',
      placeholder: 'название категории',
      styleClasses: '',
    },
    {
      type: 'input',
      inputType: 'textArea',
      label: 'cat_desc',
      model: 'cat_desc',
      max: 500,
      placeholder: 'описание категории',
      styleClasses: '',
    },
  ],
}
