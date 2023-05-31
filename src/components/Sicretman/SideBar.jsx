import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="w-full h-screen bg-red-500">
            <div className="grid grid-rows-3">
                <Link to="/" className="flex items-center gap-2 "> <FaHome></FaHome> HOme</Link>
                <Link to="/dashboard/admin">admin</Link>
                <Link to="/dashboard/route">route</Link>
            </div>
        </div>
    );
};

export default SideBar;