
import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { SiteContext } from '../context/ContextProvider';
import { toast } from 'react-toastify';
import axios from 'axios';

const Sidebar = () => {
    const { MAIN_URL, loading, setLoading, loggedinAdmin } = useContext(SiteContext);
    const location = useLocation();
    const isDashboardPath = () => {
        let pathname = location.pathname;
        return (
            pathname.startsWith('/dashboard/admin/') ||
            pathname.startsWith('/dashboard/role') ||
            pathname.startsWith('/dashboard/permission')
        );
    };
    const isPostsPath = () => {
        const pathname = location.pathname;
        return (
            pathname.startsWith('/dashboard/post')
        );
    };
    // logout system
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('_token');
            const headers = {
                Authorization: `Bearer ${token}`
            };
            const response = await axios.get(`${MAIN_URL}/api/admin/loggedin`, { headers });
            if (response.data.code === 201) {
                toast.success(response.data.message);
                localStorage.removeItem('_token');
                window.location.href = '/admin/login';
            } else if (response.data.code === 422) {
                toast.warning(response.data.message);
            } else {
                toast.error('An unexpected error occurred');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching admin:', error);
            setLoading(false);
        } finally {
            setLoading(false);
        }


    };

    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <div className="sidebar">

                    <div className='dropdown'>
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="image">
                                {
                                    loggedinAdmin?.photo ?
                                        <img src={`${MAIN_URL}/images/admins/${loggedinAdmin?.photo}`} className="img-circle elevation-2" alt="User Image" /> :
                                        <img src={`${MAIN_URL}/images/admin.png`} className="img-circle elevation-2" alt="User Image" />
                                }

                            </div>
                            <div className="info">
                                <a href="#" className="d-block text-light">{loggedinAdmin?.fname + ' ' + loggedinAdmin?.lname}</a>
                                <span className="d-block text-light">{loggedinAdmin?.get_role?.name}</span>
                            </div>
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link to={`/dashboard/admin/edit/${loggedinAdmin?.id}`} className="dropdown-item text-dark" href="#"><i className="fa fa-cog mr-2" aria-hidden="true"></i>
                                Settings</Link>
                            <a onClick={handleLogout} className="dropdown-item text-dark" href="#"><i className="fas fa-sign-out-alt mr-2"></i>
                                Logout</a>
                        </div>
                    </div>



                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                            data-accordion="false">
                            {
                                loggedinAdmin?.get_role?.permissions.includes("Dashboard") &&
                                <li className="nav-item">
                                    <Link to="/dashboard" className={`nav-link ${location.pathname === "/dashboard" ? 'active' : ''}`}>
                                        <i className="nav-icon fas fa-tachometer-alt"></i>
                                        <p>
                                            Dashboard
                                        </p>
                                    </Link>
                                </li>
                            }
                            {
                                loggedinAdmin?.get_role?.permissions.includes("Users") &&
                                <li className={`nav-item ${isDashboardPath() ? ' menu-is-opening menu-open active' : ''}`}>
                                    <Link className="nav-link">
                                        <i className="nav-icon fas fa-user"></i>
                                        <p>
                                            Admin management
                                            <i className="fas fa-angle-left right"></i>
                                        </p>
                                    </Link>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/dashboard/admin/admins" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>All Admins</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/dashboard/role" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Role</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/dashboard/permission" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Permission</p>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                            }
                            {
                                loggedinAdmin?.get_role?.permissions.includes("Posts") &&
                                <li className={`nav-item ${isPostsPath() ? ' menu-is-opening menu-open active' : ''}`}>
                                    <Link className="nav-link">
                                        <i className="far fa-clipboard nav-icon"></i>
                                        <p>
                                            Posts
                                            <i className="fas fa-angle-left right"></i>
                                        </p>
                                    </Link>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/dashboard/post" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>All Posts</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/dashboard/post/category" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Category</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/dashboard/post/subcategory" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Sub category</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/dashboard/post/subsubcategory" className="nav-link">
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Sub-Sub category</p>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                            }



                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
