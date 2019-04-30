/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


import {Form, textInput, select, renderless} from './vue-form-elements/src/index.js';

Vue.component('bbe-text-input', textInput );
Vue.component('bbe-select', select);
Vue.component('bbe-renderless', renderless);

const countryList = require('country-list');

const app = new Vue({
    el: '#app',
    data: {
        form: new Form({
            first_name: '',
            last_name: '',
            email: '',
            country: '',
            description: '',
            renderless: false
        })
    },
    computed: {
        countries() {
            return countryList.getData()
        }
    },
    methods: {
        onSubmit: function () {
            this.form.submit('post', 'api/form')
                .then(data => console.log(data))
                .catch(errors => console.error(errors))
        }
    }
});
