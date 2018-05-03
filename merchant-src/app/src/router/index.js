import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Regist from '@/components/Regist';
import Main from '@/components/Main';
import Home from '@/components/Main/Home';
import Table from '@/components/Main/Table';
import Order from '@/components/Main/Order';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'table',
          name: 'Table',
          component: Table
        },
        {
          path: 'order',
          name: 'Order',
          component: Order
        }
      ]
    }
  ]
});
