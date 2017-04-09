// import Vue from 'vue'
// import Router from 'vue-router'
// import Hello from '@/components/Hello'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })

export default [
  {
    path: '/map/',
    component:require('../components/Map.vue'),
  },
  {
    path: '/discovery/',
    component:require('../components/Discovery.vue'),
  },
  {
    path:'/setting/',
    component: require('../components/Setting.vue'),
  },
  {
    path:'/about/',
    component: require('../components/About.vue'),
  }
]
