import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Breadcrumb from '../../../shared/Breadcrumb';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SiteContext } from '../../../context/ContextProvider';
import SubmitSpinner from '../../../shared/SubmitSpinner';

const RoleEdit = () => {
    const { MAIN_URL, loading, setLoading } = useContext(SiteContext);
    const [findRole, setFindRole] = useState(null);
    const [permissionData, setPermissionData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const [nameCheck, setNameCheck] = useState(null);
    const [errors, setErrors] = useState({
        name: ''
    });

    // Permission select
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    const handlePermissionChange = (e) => {
        const { checked, value } = e.target;
        if (checked) {
            setSelectedPermissions(prevPermissions => [...prevPermissions, value]);
        } else {
            setSelectedPermissions(prevPermissions => prevPermissions.filter(permission => permission !== value));
        }
    };

    // Fetch role data by id
    useEffect(() => {
        axios.get(`${MAIN_URL}/api/role/get/${id}`)
            .then(response => {
                setFindRole(response.data.role);
                setSelectedPermissions(JSON.parse(response.data.role.permissions));
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching permission data:', error);
                setLoading(false);
            });
    }, [id]);
    // Fetch permission data
    useEffect(() => {
        axios.get(`${MAIN_URL}/api/permissions/all`)
            .then(response => {
                setPermissionData(response.data.permissions);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching permission data:', error);
                setLoading(false);
            });
    }, [id]);





    // Role update system
    const submitRole = (e) => {
        e.preventDefault();
        setLoading(true);
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
        const roleInputData = {
            "id": id,
            "name": name,
            "permissions": selectedPermissions
        };
        axios.put(`${MAIN_URL}/api/role/update`, roleInputData, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response?.data?.code === 200) {
                    toast.success(response?.data?.massage);
                    navigate("/dashboard/role", { replace: true });
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
                <Breadcrumb name={'Edit/modify role'} />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Edit role</h3>

                                        <div className="card-tools">
                                            <button className="float-right">
                                                <Link to={'/dashboard/role'}>Back</Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={submitRole}>
                                            <div className="form-group">
                                                <label htmlFor="name">Role name</label>
                                                <input defaultValue={findRole?.id} type="hidden" name="id" />
                                                <input
                                                    name='name'
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Enter role name"
                                                    defaultValue={findRole?.name}
                                                />
                                                {errors.name !== '' && <p className='text-danger'>{errors.name}</p>}
                                                {nameCheck && <p className='text-danger'>{nameCheck}</p>}
                                            </div>
                                            <div className="form-group">
                                                <label>Permissions</label>
                                                {
                                                    permissionData && permissionData.map((permission, index) => (
                                                        <div key={index} className="form-check d-flex align-items-center">
                                                            <input
                                                                name='permission'
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                id={permission.id}
                                                                value={permission.name}
                                                                onChange={handlePermissionChange}
                                                                defaultChecked={
                                                                    findRole?.permissions &&
                                                                    findRole?.permissions.includes(permission?.name)
                                                                }
                                                            />
                                                            <label className="form-check-label" htmlFor={permission.id} >{permission.name}</label>
                                                        </div>
                                                    ))
                                                }
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



export default RoleEdit;
