import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";







const Main = () => {
    const location = useLocation()


    const NoheaderFooter = location.pathname.includes('login') || location.pathname.includes('Register')

    

    return (
        <div>
            {NoheaderFooter ||
                <NavBar></NavBar>
            }
            <Outlet></Outlet>
            {
                NoheaderFooter ||
                <Footer></Footer>

            }
        </div>
    );
};

export default Main;