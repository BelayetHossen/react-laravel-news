import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Breadcrumb from '../../../shared/Breadcrumb';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SiteContext } from '../../../context/ContextProvider';
import SubmitSpinner from '../../../shared/SubmitSpinner';

const PermissionEdit = () => {
    const { MAIN_URL, loading, setLoading } = useContext(SiteContext);
    const [permissionData, setPermissionData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();


    const [nameCheck, setNameCheck] = useState(null);
    const [errors, setErrors] = useState({
        name: ''
    });

    // Fetch permission data by ID
    useEffect(() => {
        axios.get(`${MAIN_URL}/api/permission/get/${id}`)
            .then(response => {
                setPermissionData(response.data.permission);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching permission data:', error);
                setLoading(false);
            });
    }, [id]);



    // Permission update system
    const updatePermission = (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const name = e.target.name.value;
        if (name === '') {
            setErrors({
                ...errors,
                name: 'The name is required!'
            });
        } else {
            setErrors({
                ...errors,
                name: ''
            });
        }
        const permissionData = {
            "id": id,
            "name": name
        };
        axios.put(`${MAIN_URL}/api/permission/update`, permissionData, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response?.data?.code === 200) {
                    toast.success(response?.data?.massage);
                    navigate("/dashboard/permission", { replace: true });
                } else {
                    setNameCheck(response?.data?.massage);
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
                <Breadcrumb name={'Edit/modify permission'} />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Edit permission</h3>

                                        <div className="card-tools">
                                            <button className="float-right">
                                                <Link to={'/dashboard/permission'}>Back</Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={updatePermission}>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input
                                                    defaultValue={permissionData?.name}
                                                    name='name'
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Enter name"

                                                />
                                                {errors.name !== '' && <p className='text-danger'>{errors.name}</p>}
                                                {nameCheck && <p className='text-danger'>{nameCheck}</p>}
                                            </div>
                                            <input defaultValue={permissionData?.id} name='id' type="hidden" />
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



export default PermissionEdit;
