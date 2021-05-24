import crudStore from './generic'

export default {
  ...crudStore({
    url: 'artisans',
    name: 'Artisans',
  }),
}
