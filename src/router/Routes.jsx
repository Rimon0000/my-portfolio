import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Skills from "../pages/Home/Skills/Skills";
import Projects from "../pages/Home/Projects/Projects";
import Blog from "../pages/Home/blog/Blog";
import Contact from "../pages/Home/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/skills",
          element: <Skills/>
        },
        {
          path: "/projects",
          element: <Projects/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
      ]
    },
  ]);

export default router