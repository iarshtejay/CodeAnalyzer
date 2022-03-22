/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
<<<<<<< HEAD
<<<<<<< HEAD
import Profile from "views/menu/Profile.js";
import Maps from "views/menu/Maps.js";
import Register from "views/menu/Register.js";
import Login from "views/menu/Login.js";
import Tables from "views/menu/Tables.js";
import Icons from "views/menu/Icons.js";
import Commits from "views/menu/Commits.js";
=======
=======
>>>>>>> e40aa0f8 (Repository Commits V1)
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import JiraAuth from "views/JiraAuth";
<<<<<<< HEAD
>>>>>>> e1bf161f (jira integration + context api complete)
=======
=======
import Profile from "views/menu/Profile.js";
import Maps from "views/menu/Maps.js";
import Register from "views/menu/Register.js";
import Login from "views/menu/Login.js";
import Tables from "views/menu/Tables.js";
import Icons from "views/menu/Icons.js";
import Commits from "views/menu/Commits.js";
>>>>>>> db02b4bc (Repository Commits V1)
>>>>>>> e40aa0f8 (Repository Commits V1)

var routes = [
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path:"/repositories/commits",
    name: "Commits",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Commits,
    layout: "/admin"
  },
  {
    path: "/repositories",
    name: "Repositories",
    icon: "ni ni-collection text-blue",
<<<<<<< HEAD
<<<<<<< HEAD
    component: Icons,
    layout: "/admin"
=======
=======
>>>>>>> e40aa0f8 (Repository Commits V1)
    component: JiraAuth,
    layout: "/admin",
    // sub_route: [
    //   {
    //     path: "/repositories/commits",
    //     name: "Commits",
    //     icon: "ni ni-bullet-list-67 text-blue",
    //     component: JiraAuth,
    //     layout: "/admin",
    //   },
    // ],
<<<<<<< HEAD
>>>>>>> e1bf161f (jira integration + context api complete)
=======
=======
    component: Icons,
    layout: "/admin"
>>>>>>> db02b4bc (Repository Commits V1)
>>>>>>> e40aa0f8 (Repository Commits V1)
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  }
];
export default routes;
