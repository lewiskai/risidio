import Home from "../pages/Home/index"
import Proprietor from "../pages/Proprietor/index"
import ProprietorCopy from "../pages/ProprietorCopy/index"
import Content from "../pages/Content/index"
import { useRoutes } from "react-router-dom";
const Router=()=>{
    return useRoutes(
        [
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/Home",
                element:<Home/>
            },
            {
                path:"/Proprietor",
                element:<Proprietor/>,
            },
            {
                path:"/ProprietorCopy",
                element:<ProprietorCopy/>,
            },
            {
                path:"/Content",
                element:<Content/>,
            }
        ]
    )
}
export default Router