import { createContext, useState, useEffect } from "react";
export const SiteContext = createContext();
const MAIN_URL = "http://127.0.0.1:8000";

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [loggedinAdmin, setLoggedinAdmin] = useState(null);
    const token = localStorage.getItem('_token');
    const [latestOne, setLatestOne] = useState(null);
    const [nextFourPost, setNextFourPost] = useState([]);
    const [nextSixPost, setNextSixPost] = useState([]);
    const [popularFourPosts, setPopularFourPosts] = useState([]);

    // Fatch loggedIn admin
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

    // remove html tag
    const removeHtmlTags = (htmlString) => {
        if (htmlString) {
            const regex = /(<([^>]+)>)/gi;
            return htmlString.replace(regex, '');
        } else {
            return '';
        }
    };



    // Fetch home post
    useEffect(() => {
        axios.get(`${MAIN_URL}/api/home/post`)
            .then(response => {
                setLatestOne(response.data.latestOne);
                setNextFourPost(response.data.nextFourPosts);
                setNextSixPost(response.data.nextSixPosts);
                setPopularFourPosts(response.data.popularFourPosts);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching permission data:', error);
                setLoading(false);
            });
    }, []);

    // increase populer post count by click user
    const handlePopulerClick = async (id) => {
        try {
            await axios.get(`/api/posts/${id}/click`);
        } catch (error) {
            console.error('Error incrementing popular count:', error);
        }
    };





    const authInfo = {
        MAIN_URL,
        loading,
        setLoading,
        loggedinAdmin,
        token,
        removeHtmlTags,
        latestOne,
        nextFourPost,
        nextSixPost,
        popularFourPosts,
        handlePopulerClick
    };

    return (
        <SiteContext.Provider value={authInfo}>{children}</SiteContext.Provider>
    );
};

export default ContextProvider;
