import { useContext, useState, useEffect } from 'react';
import SubmitSpinner from '../../shared/SubmitSpinner';
import { Link } from 'react-router-dom';
import { SiteContext } from '../../context/ContextProvider';

const Forgot = () => {
    const { MAIN_URL, loading, setLoading } = useContext(SiteContext);
    const [succMsg, setSuccMsg] = useState(null);
    const [errors, setErrors] = useState({
        identity: '',
        password: '',
    });
    useEffect(() => {
        setLoading(false);
    }, []);

    const submitForgot = (e) => {
        e.preventDefault();

        setLoading(true);
        const identity = e.target.identity.value;

        // Validation
        let formIsValid = true;
        const errorsCopy = { ...errors };
        if (identity.trim() === '') {
            errorsCopy.identity = 'The email is required!';
            formIsValid = false;
        } else {
            errorsCopy.identity = '';
        }

        setErrors(errorsCopy);
        const forgotData = {
            "identity": identity,
        };
        // Proceed with form submission only if form is valid
        if (!formIsValid) {
            setLoading(false);
            return;
        }
        axios.post(`${MAIN_URL}/api/admin/password/forgot`, forgotData, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response?.data?.code === 201) {
                    setSuccMsg(response?.data?.message);
                }
                if (response?.data?.code === 401) {
                    errorsCopy.identity = response?.data?.message;
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
            <div className="login-logo">
                <a><b>Forgot</b>password</a>
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Put your email to get reset link</p>
                    {
                        succMsg ? <div className="alert alert-success" role="alert">
                            {succMsg}
                        </div> :
                            <form onSubmit={submitForgot}>
                                <div className="form-group">
                                    <input
                                        name='identity'
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                    />
                                    {errors.identity !== '' && <p className='text-danger'>{errors.identity}</p>}
                                </div>


                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="">
                                        <div className="icheck-primary">
                                            <Link to="/admin/login">
                                                <button type="submit" className="btn btn-primary">Back to login</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="">
                                        {loading ? (
                                            <SubmitSpinner />
                                        ) : (
                                            <button type="submit" className="btn btn-primary">Send request</button>
                                        )}
                                    </div>
                                </div>
                            </form>
                    }


                </div>
            </div>
        </>
    );
};

export default Forgot;
