import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './shared/Header';
import Sidebar from './shared/Sidebar';
import Footer from './shared/Footer';
import ContextProvider from './context/ContextProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import Dashboard from './pages/Dashboard';
import PermissionAll from './pages/admin/permission/PermissionAll';
import PermissionCreate from './pages/admin/permission/PermissionCreate';
import PermissionEdit from './pages/admin/permission/PermissionEdit';
import RoleAll from './pages/admin/role/RoleAll';
import RoleCreate from './pages/admin/role/RoleCreate';
import RoleEdit from './pages/admin/role/RoleEdit';
import AdminAll from './pages/admin/AdminAll';
import AdminCreate from './pages/admin/AdminCreate';
import AdminEdit from './pages/admin/AdminEdit';
import PrivateRoute from './private/PrivateRoute';
import CategoryAll from './pages/post/category/CategoryAll';
import CategoryCreate from './pages/post/category/CategoryCreate';
import CategoryEdit from './pages/post/category/CategoryEdit';
import PostAll from './pages/post/posts/PostAll';
import PostCreate from './pages/post/posts/PostCreate';
import PostEdit from './pages/post/posts/PostEdit';
import SubCategoryAll from './pages/post/sub-category/SubCategoryAll';
import SubCategoryCreate from './pages/post/sub-category/SubCategoryCreate';
import SubCategoryEdit from './pages/post/sub-category/SubCategoryEdit';
import SubSubCategoryAll from './pages/post/sub-sub-category/SubSubCategoryAll';
import SubSubCategoryCreate from './pages/post/sub-sub-category/SubSubCategoryCreate';
import SubSubCategoryEdit from './pages/post/sub-sub-category/SubSubCategoryEdit';
import TagAll from './pages/post/tags/TagAll';
import TagCreate from './pages/post/tags/TagCreate';
import TagEdit from './pages/post/tags/TagEdit';


const queryClient = new QueryClient();

function BackMain() {
    return (

        <BrowserRouter basename='/'>
            <QueryClientProvider client={queryClient}>
                <ContextProvider>
                    <Header />
                    <Sidebar />
                    <Routes>
                        <Route exact path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                        {/* Permission */}
                        <Route exact path='/dashboard/permission' element={<PrivateRoute><PermissionAll /></PrivateRoute>} />
                        <Route exact path='/dashboard/permission/create' element={<PrivateRoute><PermissionCreate /></PrivateRoute>} />
                        <Route exact path='/dashboard/permission/edit/:id' element={<PrivateRoute><PermissionEdit /></PrivateRoute>} />
                        {/* Role  */}
                        <Route exact path='/dashboard/role' element={<PrivateRoute><RoleAll /></PrivateRoute>} />
                        <Route exact path='/dashboard/role/create' element={<PrivateRoute><RoleCreate /></PrivateRoute>} />
                        <Route exact path='/dashboard/role/edit/:id' element={<PrivateRoute><RoleEdit /></PrivateRoute>} />
                        {/* Admin  */}
                        <Route exact path='/dashboard/admin/admins' element={<PrivateRoute><AdminAll /></PrivateRoute>} />
                        <Route exact path='/dashboard/admin/create' element={<PrivateRoute><AdminCreate /></PrivateRoute>} />
                        <Route exact path='/dashboard/admin/edit/:id' element={<PrivateRoute><AdminEdit /></PrivateRoute>} />
                        {/* Post category */}
                        <Route exact path='/dashboard/post/category' element={<PrivateRoute><CategoryAll /></PrivateRoute>} />
                        <Route exact path='/dashboard/post/category/create' element={<PrivateRoute><CategoryCreate /></PrivateRoute>} />
                        <Route exact path='/dashboard/post/category/edit/:id' element={<PrivateRoute><CategoryEdit /></PrivateRoute>} />
                        {/* Post sub-category */}
                        <Route exact path='/dashboard/post/subcategory' element={<PrivateRoute><SubCategoryAll /></PrivateRoute>} />
                        <Route exact path='/dashboard/post/subcategory/create' element={<PrivateRoute><SubCategoryCreate /></PrivateRoute>} />
                        <Route exact path='/dashboard/post/subcategory/edit/:id' element={<PrivateRoute><SubCategoryEdit /></PrivateRoute>} />
                        {/* Post sub-sub-category */}
                        <Route exact path='/dashboard/post/subsubcategory' element={<PrivateRoute><SubSubCategoryAll /></PrivateRoute>} />
                        <Route exact path='/dashboard/post/subsubcategory/create' element={<PrivateRoute><SubSubCategoryCreate /></PrivateRoute>} />
                        <Route exact path='/dashboard/post/subsubcategory/edit/:id' element={<PrivateRoute><SubSubCategoryEdit /></PrivateRoute>} />

                        {/* Tags */}
                        <Route exact path='/dashboard/tag' element={<PrivateRoute><TagAll /></PrivateRoute>} />
                        <Route exact path='/dashboard/tag/create' element={<PrivateRoute><TagCreate /></PrivateRoute>} />
                        <Route exact path='/dashboard/tag/edit/:id' element={<PrivateRoute><TagEdit /></PrivateRoute>} />

                        {/* Post  */}
                        <Route exact path='/dashboard/post' element={<PrivateRoute><PostAll /></PrivateRoute>} />
                        <Route exact path='/dashboard/post/create' element={<PrivateRoute><PostCreate /></PrivateRoute>} />
                        <Route exact path='/dashboard/post/edit/:id' element={<PrivateRoute><PostEdit /></PrivateRoute>} />

                    </Routes>
                    <Footer />
                </ContextProvider>
            </QueryClientProvider>
        </BrowserRouter>
    );
}



ReactDOM.createRoot(document.getElementById('back-app')).render(<BackMain />);
