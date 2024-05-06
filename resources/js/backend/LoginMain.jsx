import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextProvider from './context/ContextProvider';
import Login from './pages/login/Login';
import Forgot from './pages/login/Forgot';
import ResetPassword from './pages/login/ResetPassword';

function LoginMain() {
    return (
        <>
            <BrowserRouter basename='/'>
                <ContextProvider>
                    <Routes>
                        <Route exact path='/admin' element={<Login />} />
                        <Route exact path='/admin/login' element={<Login />} />
                        <Route exact path='/admin/password/forgot' element={<Forgot />} />
                        <Route exact path='/admin/reset/:token/:email' element={<ResetPassword />} />
                    </Routes>
                </ContextProvider>
            </BrowserRouter>
        </>
    );
};

ReactDOM.createRoot(document.getElementById('admin-login-page')).render(<LoginMain />);
