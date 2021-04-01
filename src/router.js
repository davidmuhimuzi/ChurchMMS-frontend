import Vue from "vue";
import Router from "vue-router";
import FamiliesList from "./views/FamiliesList"
import FamilyAdd from "./views/FamilyAdd"
import FamilyEdit from "./views/FamilyEdit"
import Calendar from "./components/Calendar"
import Congregation_Display from "./views/Congregation_Display"
import CongregationEdit from "./views/CongregationEdit"
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue')
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('./views/BoardModerator.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    },
    {
      path: "/families",
      name: "familieslist",
      component: FamiliesList
    },
    {
      path: "/familyadd",
      name: "familyadd",
      component: FamilyAdd
    },
    {
      path: "/familyedit",
      name: "familyedit",
      component: FamilyEdit
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Calendar
    },
    {
      path: "/person",
      name: "personlist",
      component: () => import("./views/PersonList")
    },
    {
      path: "/personedit",
      name: "person-edit",
      component: () => import("./views/PersonEdit")
    },
    {
      path: "/personadd",
      name: "personadd",
      component: () => import("./views/PersonAdd")
    },
    {
    path: "/vvg",
    name: "vvglist",
    component: () => import("./views/VvgList")
  },
  {
    path: "/vvgedit",
    name: "vvg-edit",
    component: () => import("./views/VvgEdit")
  },
  {
    path: "/vvgadd",
    name: "vvgadd",
    component: () => import("./views/VvgAdd")
  },
  {
  path: "/vve",
  name: "vvelist",
  component: () => import("./views/VveList")
},
{
  path: "/vvgedit",
  name: "vve-edit",
  component: () => import("./views/VveEdit")
},
{
  path: "/vveadd",
  name: "vveadd",
  component: () => import("./views/VveAdd")
},
    {
      path: "/congregation",
      name: "congregationdisplay",
      component: Congregation_Display
    },
    {
        path: "/congregationedit",
        name: "congregationedit",
        component: CongregationEdit
    },
    {
      path: "/congregationadd",
      name: "congregationadd",
      component: () => import("./views/CongregationAdd")

    }
  ]
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });
