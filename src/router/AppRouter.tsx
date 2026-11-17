import  { createBrowserRouter, type RouteObject } from "react-router";
import About from "../pages/About.tsx";
import Home from "../pages/Home.tsx";
import MainLayout from "../layout/MainLayout.tsx";

const AppRouter = ()=> {
    const routes: RouteObject[] = [
        {
            element: <MainLayout />,
            path: "/",
            children: [
                { index: true, element: <Home /> }, // Home => "/"
                { path: "about", element: <About /> } // About => "/about"
            ]
        }
    ];

    return createBrowserRouter(routes);
};

export default AppRouter;