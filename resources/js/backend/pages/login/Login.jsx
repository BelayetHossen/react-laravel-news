import { useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { SiteContext } from '../../context/ContextProvider';
import 'react-toastify/dist/ReactToastify.css';
import SubmitSpinner from '../../shared/SubmitSpinner';
import { Link } from 'react-router-dom';

const Login = () => {
    const { MAIN_URL, loading, setLoading, loggedinAdmin } = useContext(SiteContext);
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [saveloggedIn, setSaveLoggedIn] = useState(JSON.parse(localStorage.getItem('_loggedIn')));

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const [errors, setErrors] = useState({
        identity: '',
        password: '',
    });
    useEffect(() => {
        setLoading(false);
    }, []);

    if (loggedinAdmin) {
        toast.warning("You are already loggedIn");
        window.location.href = '/dashboard';
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    // login system
    const submitLogin = (e) => {
        e.preventDefault();

        setLoading(true);
        const identity = e.target.identity.value;
        const password = e.target.password.value;

        // Validation
        let formIsValid = true;
        const errorsCopy = { ...errors };
        if (identity.trim() === '') {
            errorsCopy.identity = 'The email/phone/username is required!';
            formIsValid = false;
        } else {
            errorsCopy.identity = '';
        }

        if (password.trim() === '') {
            errorsCopy.password = 'The password is required!';
            formIsValid = false;
        } else {
            errorsCopy.password = '';
        }
        setErrors(errorsCopy);
        const loginData = {
            "identity": identity,
            "password": password,
        };
        // Proceed with form submission only if form is valid
        if (!formIsValid) {
            setLoading(false);
            return;
        }
        axios.post(`${MAIN_URL}/api/admin/login`, loginData, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response?.data?.code === 421) {
                    errorsCopy.identity = response?.data?.message;
                }
                if (response?.data?.code === 201) {
                    toast.success(response?.data?.massage);
                    localStorage.setItem('_token', response?.data?.token);
                    if (isChecked) {
                        localStorage.setItem('_loggedIn', JSON.stringify({ "identity": identity, "password": password }));
                    }
                    window.location.href = '/dashboard';
                }
                if (response?.data?.code === 422) {
                    errorsCopy.password = response?.data?.message;
                }

                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    };
    return (
        <>
            <ToastContainer />
            <div className="login-logo">
                <a><b>Admin</b>Login</a>
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>

                    <form onSubmit={submitLogin}>
                        <div className="form-group">
                            <input
                                name='identity'
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Email/phone/username"
                                defaultValue={saveloggedIn?.identity}
                            />
                            {errors.identity !== '' && <p className='text-danger'>{errors.identity}</p>}
                        </div>
                        <div className="input-group mb-3">
                            <div className='position-relative w-100'>
                                <input
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter password"
                                    defaultValue={saveloggedIn?.password}
                                />
                                <div style={{ top: '0', right: '0', marginTop: '6px' }} className='position-absolute mr-2' onClick={togglePasswordVisibility}>
                                    {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
                                </div>
                            </div>

                            {errors.password !== '' && <p className='text-danger'>{errors.password}</p>}
                        </div>

                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="">
                                <div className="icheck-primary">
                                    <input name='remember' type="checkbox" id="remember" onChange={handleCheckboxChange} checked={isChecked} />
                                    <label htmlFor="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <div className="">
                                {loading ? (
                                    <SubmitSpinner />
                                ) : (
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                )}
                            </div>
                        </div>
                    </form>

                    <p className="mb-1">
                        <Link to={'/admin/password/forgot'} href="forgot-password.html">I forgot my password</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
