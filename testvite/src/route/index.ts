import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
      path: '/',
      component: (()=>import('../Layout/index.vue')),
      redirect: '/welcome',
      children: [
        {
          path: 'welcome',
          component: (()=>import('../components/HelloWorld.vue')),
        },
        {
          path: 'one',
          component: (()=>import('../views/one.vue')),
        },
        {
          path: 'two',
          component: (()=>import('../views/two.vue')),
        },
      ],
    },
  ]



const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router