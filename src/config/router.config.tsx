import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "../pages/landing/landing"
import ContactPage from '../pages/Contact/contact'
import NotFound from "../pages/errors/not-found.page"
const RouterConfig=()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    {/* Here we defind the path and the page to be loaded in this path  */}
                    <Route path="/" element={<LandingPage/>}></Route>
                    <Route path="/Contact" element={<ContactPage />}></Route>


                {/* Not defind routes */}
                <Route path="*" element={<NotFound />}></Route>
                </Routes>

            </BrowserRouter>
        </>
    )
}
 
export default RouterConfig