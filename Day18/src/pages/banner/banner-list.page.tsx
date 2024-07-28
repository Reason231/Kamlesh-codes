import { FaPlus } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const AdminBannerList=()=>{
    return(
        <>
        <div className="my-5 border-b border-spacing-4 flex justify-between">
            <h1 className="text-2xl font-semibold py-3 "> Banner List Page</h1>
        <NavLink to={"/admin/banner/create"} className={"flex text-center bg-teal-300 px-5 py-3"}><FaPlus /> Add Banner</NavLink>
        </div>

        </>
    )
}

export default AdminBannerList