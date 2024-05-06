import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../shared/Breadcrumb';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SiteContext } from '../../../context/ContextProvider';
import SubmitSpinner from '../../../shared/SubmitSpinner';

const PermissionCreate = () => {
    const { MAIN_URL, loading, setLoading } = useContext(SiteContext);
    const [nameCheck, setNameCheck] = useState(null);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const regiPermission = (data) => {
        axios.post(`${MAIN_URL}/api/permission/store`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response?.data?.code === 200) {
                    toast.success(response?.data?.message);
                    navigate("/dashboard/permission", { replace: true });
                } else {
                    setNameCheck(response?.data?.message);
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
                <Breadcrumb name={'Add new permission'} />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Create new permission</h3>

                                        <div className="card-tools">
                                            <button className="float-right">
                                                <Link to={'/dashboard/permission'}>Back</Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit((data) => regiPermission(data))}>
                                            <div className="form-group">
                                                <label for="name">Name</label>
                                                <input {...register('name', { required: true })} type="text" className="form-control" id="name" placeholder="Enter name" />
                                                {errors.name && <p className='text-danger'>The name is required.</p>}
                                                {nameCheck && <p className='text-danger'>{nameCheck}</p>}
                                            </div>

                                            {
                                                loading ? (
                                                    <SubmitSpinner />
                                                ) : (
                                                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                                                )
                                            }





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

export default PermissionCreate;
