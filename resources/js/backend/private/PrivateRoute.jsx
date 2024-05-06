import { useContext } from "react";
import { SiteContext } from "../context/ContextProvider";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
    const { token } = useContext(SiteContext);

    if (token) {
        return children;
    }

    if (!token) {
        toast.warning("You need to logIn");
        window.location.href = '/admin/login';
    }

};




export default PrivateRoute;

