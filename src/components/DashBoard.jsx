import { Outlet } from "react-router-dom";
import SideBar from "./Sicretman/SideBar";


import './Sicretman/dh.css'

const DashBoard = () => {


    return (
        <div>
            <div className=" mt-20 bg-green-400 fracting">

                <SideBar></SideBar>

                <Outlet></Outlet>



            </div>

        </div>
    );
};

export default DashBoard;