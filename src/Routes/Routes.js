import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HeroSection from "../Pages/Home/HeroSection";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <HeroSection></HeroSection>
            }
        ])
    }
])

export default router;