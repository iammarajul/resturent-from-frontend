// 1. Define route components.
// These can be imported from other files
import { createRouter, createWebHistory } from 'vue-router';
import AdminItemPage from '../pages/AdminItemPage.vue';
import AdminPage from "../pages/AdminPage.vue";
import HomePage from '../pages/HomePage.vue';
import loginPage from '../pages/loginPage.vue';


const About = { template: '<div>Admin</div>' }


const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: false } },
  { path: '/admin', component: AdminPage, meta: { requiresAuth: true } },
  { path: '/admin/:id', component: AdminItemPage, meta: { requiresAuth: true } },
  { path: '/login', component: loginPage, meta: { requiresAuth: false } },
]



const router = createRouter({
  history: createWebHistory(),
  routes,
});

// make a route guard

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('loggedintoken');
  
  if(loggedIn){
    const token = JSON.parse(loggedIn);
    if(token.exp < Date.now()){
      localStorage.removeItem('loggedintoken');
      next('/login');
    }
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login');
  }
  next();
});



export default router;