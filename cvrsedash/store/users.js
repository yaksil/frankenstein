import crudStore from './generic'

export default {
  ...crudStore({
    url: 'users',
    name: 'Users',
  }),
}
