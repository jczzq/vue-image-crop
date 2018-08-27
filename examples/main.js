import Vue from 'vue';
import App from './App';
import mic from '../src/index';

Vue.use(mic);

new Vue({
    el: '#app',
    render: h => h(App)
});
