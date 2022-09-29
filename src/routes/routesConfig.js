import PageHome from "../Pages/PageHome/PageHome";
import PageProjects from "../Pages/PageProjects/PageProjects";
import PageAbout from "../Pages/PageAbout/PageAbout";
import PageContact from "../Pages/PageContact/PageContact";

const routesConfig = [
  {
    path: '/',
    component: <PageHome/>
  },
  {
    path: '/projects',
    component: <PageProjects/>
  },
  {
    path: '/about',
    component: <PageAbout/>
  },
  {
    path: '/contact',
    component: <PageContact/>
  },
];

export default routesConfig;