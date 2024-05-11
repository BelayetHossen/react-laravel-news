import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import ContextProvider from '../backend/context/ContextProvider';
import Home from './pages/Home';
import Header from './shared/Header';
import Footer from './shared/Footer';
import PostDetails from './pages/PostDetails';



const queryClient = new QueryClient()

function FrontMain() {
    return (
        <BrowserRouter basename='/'>
            <QueryClientProvider client={queryClient}>
                <ContextProvider>
                    <Header />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/details/:slug' element={<PostDetails />} />
                    </Routes>
                    <Footer />
                </ContextProvider>
            </QueryClientProvider>
        </BrowserRouter>
    );
}



ReactDOM.createRoot(document.getElementById('front-app')).render(<FrontMain />);
