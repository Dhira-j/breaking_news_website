// src/App.jsx
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createRoot } from "react-dom/client";
import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tazakhabar from "./pages/Tazakhabar";
import Khel from "./pages/Khel";
import Bollywood from "./pages/Bollywood";
import World from "./pages/World";
import Politics from "./pages/Politics";
import NewsDetail from "./pages/NewsDetail";
import './index.css'










const App = () => {
   return (
      <div className="app container-xxl p-3 m-auto border border-5 border-danger-subtle ">
         <Header />
         <Outlet />
         <Footer />

      </div>
   )
};

const appRouter = createBrowserRouter(
   [
      {
         path: "/",
         element: <App />,
         children: [
            {
               path: "/",
               element: <Body />
            },
            {
               path: "/tazakhabar",
               element: <Tazakhabar />

            },
            {
               path: "/khel",
               element: <Khel />

            }
            ,
            {
               path: "/bollywood",
               element: <Bollywood />

            },
            {
               path: "/politics",
               element: <Politics />

            },
            {
               path: "/world",
               element: <World />

            },
            {
               path: "/contact",
               element: <Contact />

            },
            {
               path: "/about",
               element: <About />

            },
            { 
               path: "/news/:id", 
               element: <NewsDetail /> 
            }

         ]

      }


   ]
)


const root = createRoot(document.getElementById("root"));
root.render(
   <RouterProvider router={appRouter} />

);


