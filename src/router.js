import Vue from "vue";
import Router from "vue-router";
import FamiliesList from "./views/FamiliesList"
import FamilyAdd from "./views/FamilyAdd"
import FamilyEdit from "./views/FamilyEdit"
import Event from "./views/Event"

Vue.use(Router);

export default new Router({
  mode: "history",


  routes: [
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
      path: "/events",
      name: "events",
      component: Event
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
    }
  
  ]
});
