import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Layout = () => {
    return ( <>
        <NavigationBar/>
        <div >
            <Outlet></Outlet>
        </div>
    </> );
}
 
export default Layout;