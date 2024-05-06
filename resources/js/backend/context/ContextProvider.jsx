import { createContext, useState, useEffect } from "react";
export const SiteContext = createContext();
const MAIN_URL = "http://127.0.0.1:8000";

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [loggedinAdmin, setLoggedinAdmin] = useState(null);
    const token = localStorage.getItem('_token');
    useEffect(() => {
        const fetchAdmin = async () => {
            const token = localStorage.getItem('_token');
            if (token) {
                try {
                    const headers = {
                        Authorization: `Bearer ${token}`
                    };
                    const response = await axios.get(`${MAIN_URL}/api/admin/loggedin`, { headers });
                    setLoggedinAdmin(response?.data?.admin);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching admin:', error);
                    setLoading(false);
                } finally {
                    setLoading(false);
                }
                setLoading(false);
            }
        };
        fetchAdmin();
    }, []);






    const authInfo = {
        MAIN_URL,
        loading,
        setLoading,
        loggedinAdmin,
        token
    };

    return (
        <SiteContext.Provider value={authInfo}>{children}</SiteContext.Provider>
    );
};

export default ContextProvider;
