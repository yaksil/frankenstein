import Vue from 'vue'
import FormGenerator from 'vue-form-generator'
import Multiselect from 'vue-multiselect'

import 'vue-multiselect/dist/vue-multiselect.min.css'

Vue.component('multiselect', Multiselect)

import 'vue-form-generator/dist/vfg.css'

Vue.use(FormGenerator, require('vue-form-generator'))
Vue.component('vue-form-generator', require('vue-form-generator'))
