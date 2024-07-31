import { Outlet } from "react-router"
import { HomeHeader } from "../../components/header/home-header.components"

export const HomePageLayout = () =>{
    return(
        <>
        <HomeHeader />

        <Outlet />
        {/* footer */}
        <footer className="text-teal-400 text-3xl text-center">This is footer</footer>

        </>
    )
}