import Vue from 'vue';
import router from './router';
import App from './components/App';


Vue.component('app', require('./components/App.vue').default);


require('./bootstrap');

window.Vue = require('vue');


const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router
});
