import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Breadcrumb from '../../shared/Breadcrumb';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SiteContext } from '../../context/ContextProvider';
import SubmitSpinner from '../../shared/SubmitSpinner';





const AdminCreate = () => {
    const { MAIN_URL, loading, setLoading } = useContext(SiteContext);
    const [roleData, setRoleData] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Fetch role all data
    useEffect(() => {
        axios.get(`${MAIN_URL}/api/roles/all`)
            .then(response => {
                setRoleData(response.data.roles);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching role data:', error);
                setLoading(false);
            });
    }, []);




    // image preview system
    const [image, setImage] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState(null);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            setImage(URL.createObjectURL(selectedImage));
            setProfilePhoto(selectedImage);
        }
    };
    const handleRemoveImage = () => {
        setImage(null);
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const handleDrop = (e) => {
        e.preventDefault();
        const selectedImage = e.dataTransfer.files[0];
        if (selectedImage) {
            setImage(URL.createObjectURL(selectedImage));
            setProfilePhoto(selectedImage);
        }
    };

    const [errors, setErrors] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        gender: '',
        role: '',
    });

    // create system
    const submitAdmin = (e) => {
        e.preventDefault();
        setLoading(true);
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const username = e.target.username.value;
        const password = e.target.password.value;
        const gender = e.target.gender.value;
        const role = e.target.role.value;

        // Validation
        let formIsValid = true;
        const errorsCopy = { ...errors };
        const isValidEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$/;
        const isValidPhone = /(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/;

        if (fname.trim() === '') {
            errorsCopy.fname = 'The first name is required!';
            formIsValid = false;
        } else {
            errorsCopy.fname = '';
        }

        if (lname.trim() === '') {
            errorsCopy.lname = 'The last name is required!';
            formIsValid = false;
        } else {
            errorsCopy.lname = '';
        }
        if (email.trim() === '') {
            errorsCopy.email = 'The email is required!';
            formIsValid = false;
        } else {
            errorsCopy.email = '';
        }
        if (email && email.match(isValidEmail)) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'The email is not valid!';
            formIsValid = false;
        }

        if (phone.trim() === '') {
            errorsCopy.phone = 'The phone is required!';
            formIsValid = false;
        } else {
            errorsCopy.phone = '';
        }
        if (phone && phone.match(isValidPhone)) {
            errorsCopy.phone = '';
        } else {
            errorsCopy.phone = 'The phone is not valid!';
            formIsValid = false;
        }

        if (username.trim() === '') {
            errorsCopy.username = 'The username is required!';
            formIsValid = false;
        } else {
            errorsCopy.username = '';
        }

        if (password.trim() === '') {
            errorsCopy.password = 'The password is required!';
            formIsValid = false;
        } else {
            errorsCopy.password = '';
        }


        setErrors(errorsCopy);

        // Create FormData object
        const formData = new FormData();
        formData.append('fname', fname);
        formData.append('lname', lname);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('gender', gender);
        formData.append('role', role);
        formData.append('photo', profilePhoto);

        // Proceed with form submission only if form is valid
        if (!formIsValid) {
            setLoading(false);
            return;
        }
        axios.post(`${MAIN_URL}/api/admin/store`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => {
                if (response?.data?.code === 422) {
                    errorsCopy.email = response?.data?.massage;
                }
                if (response?.data?.code === 423) {
                    errorsCopy.phone = response?.data?.massage;
                }
                if (response?.data?.code === 424) {
                    errorsCopy.username = response?.data?.massage;
                }
                if (response?.data?.code === 200) {
                    toast.success(response?.data?.massage);
                    navigate("/dashboard/admin/admins", { replace: true });
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
            <div className="content-wrapper">
                <Breadcrumb name={'Create admin'} />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Add new admin</h3>

                                        <div className="card-tools">
                                            <button className="float-right">
                                                <Link to={'/dashboard/admin/admins'}>Back</Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={submitAdmin} encType="multipart/form-data">
                                            <div className="form-group">
                                                <label htmlFor="fname">First name</label>
                                                <input
                                                    name='fname'
                                                    type="text"
                                                    className="form-control"
                                                    id="fname"
                                                    placeholder="Enter first name"
                                                />
                                                {errors.fname !== '' && <p className='text-danger'>{errors.fname}</p>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lname">Last name</label>
                                                <input
                                                    name='lname'
                                                    type="text"
                                                    className="form-control"
                                                    id="lname"
                                                    placeholder="Enter last name"
                                                />
                                                {errors.lname !== '' && <p className='text-danger'>{errors.lname}</p>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    name='email'
                                                    type="text"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Enter email"
                                                />
                                                {errors.email !== '' && <p className='text-danger'>{errors.email}</p>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                <input
                                                    name='phone'
                                                    type="text"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="Enter phone"
                                                />
                                                {errors.phone !== '' && <p className='text-danger'>{errors.phone}</p>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="username">Username</label>
                                                <input
                                                    name='username'
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    placeholder="Enter username"
                                                />
                                                {errors.username !== '' && <p className='text-danger'>{errors.username}</p>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <div className='position-relative'>
                                                    <input
                                                        name='password'
                                                        type={showPassword ? 'text' : 'password'}
                                                        className="form-control"
                                                        id="password"
                                                        placeholder="Enter password"
                                                    />
                                                    <div style={{ top: '0', right: '0', marginTop: '6px' }} className='position-absolute mr-2' onClick={togglePasswordVisibility}>
                                                        {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
                                                    </div>
                                                </div>
                                                {errors.password !== '' && <p className='text-danger'>{errors.password}</p>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Gender</label>
                                                <select className='form-control' name='gender'>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Role</label>
                                                {
                                                    roleData && (
                                                        <select
                                                            className="form-control"
                                                            name='role'
                                                        >
                                                            {roleData?.map((item, index) => (
                                                                <option key={index} value={item.id}>
                                                                    {item.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    )
                                                }
                                            </div>

                                            <div className="form-group">
                                                <label>Profile photo</label>
                                                {
                                                    !image && <>
                                                        <label
                                                            onDrop={handleDrop}
                                                            onDragOver={handleDragOver}
                                                            htmlFor="fileInput"
                                                            className="d-block border border-md py-3 text-center"
                                                        >
                                                            <h5 className='text-success text-bold'>Drag and drop or</h5> <p className='btn btn-sm'>select file</p>
                                                            <p className='text-danger'>Recomanded size(200 X 200)</p>
                                                        </label>
                                                        <input
                                                            name='photo'
                                                            id="fileInput"
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={handleImageChange}
                                                            className="d-none"
                                                        /></>
                                                }

                                                <div className="mt-3 position-relative">
                                                    <div className="row">
                                                        {image &&
                                                            <div className="col-3 mb-3 border m-auto">
                                                                <img src={image} alt={`Preview `} className="w-100" />
                                                                <button
                                                                    style={{ top: '0', right: '0' }}
                                                                    className="btn btn-sm mt-2 position-absolute mr-2"
                                                                    onClick={handleRemoveImage}
                                                                >
                                                                    <i className="fas fa-times-circle text-danger"></i>
                                                                </button>
                                                            </div>
                                                        }
                                                    </div>

                                                </div>
                                            </div>



                                            {loading ? (
                                                <SubmitSpinner />
                                            ) : (
                                                <button type="submit" className="btn btn-primary float-right">Submit</button>
                                            )}
                                        </form>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};


export default AdminCreate;
