import { useContext } from "react";
import { contexM } from "../AuthProvider/ContexSuplier";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const location = useLocation()

    const { user, Loader } = useContext(contexM)

    if (Loader) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children
    }

    return <Navigate  state={{from:location}} replace to='/login'></Navigate>
};

export default PrivateRoute;