import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../shared/Breadcrumb';
import { useQuery } from 'react-query';
import DataTable from 'react-data-table-component';
import { SiteContext } from '../../context/ContextProvider';
import { toast } from 'react-toastify';
import Spinner from '../../shared/Spinner';
import Swal from 'sweetalert2';

const AdminAll = () => {
    const { MAIN_URL, loading, setLoading, loggedinAdmin } = useContext(SiteContext);
    const { isPending, data: adminData = [], isFetching, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => axios
            .get(`${MAIN_URL}/api/admins/all`)
            .then((res) => res.data.admins),
    });
    const [search, setSearch] = useState("");
    const filteredItems = adminData?.filter(
        (item) =>
            item.phone && item.phone.toLowerCase().includes(search.toLowerCase()) || item.email && item.email.toLowerCase().includes(search.toLowerCase())
    );


    // status change system
    const statusChangeHandler = (id) => {
        setLoading(true);
        axios
            .get(`${MAIN_URL}/api/admin/status/${id}`)
            .then((response) => {
                if (response.data.code == 200) {
                    toast.success(response.data.massage);
                }
                refetch();
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error storing data:", error);
                setLoading(false);
            });
    };
    // Delete system
    const deleteHandler = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .get(`${MAIN_URL}/api/admin/delete/${id}`)
                    .then((response) => {
                        if (response.data.code == 200) {
                            toast.success(response.data.massage);
                        }
                        refetch();
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error("Error storing data:", error);
                        setLoading(false);
                    });
            }
        });
    }
    // columns for table
    const columns = [
        {
            name: "Name",
            selector: (row) => (
                <>
                    <div className="d-flex align-items-center">
                        <img className='rounded-circle w-25' src={MAIN_URL + "/images/admins/" + row.photo} alt="" />
                        <p className="ml-2">{row.fname + ' ' + row.lname}</p>
                    </div>
                </>
            ),
        },
        {
            name: "Role",
            selector: (row) => (
                <>
                    <div className="">
                        <p className="">{row.get_role.name}</p>
                    </div>
                </>
            ),
        },
        {
            name: "Email",
            selector: (row) => (
                <>
                    <div className="">
                        <p className="">{row.email}</p>
                    </div>
                </>
            ),
        },
        {
            name: "Phone",
            selector: (row) => (
                <>
                    <div className="">
                        <p className="">{row.phone}</p>
                    </div>
                </>
            ),
        },
        {
            name: "Status",
            selector: (row) => (
                loggedinAdmin?.id !== row?.id ? (
                    <div className="custom-control custom-switch">
                        <input
                            style={{ cursor: 'pointer' }}
                            defaultChecked={row.status === 1}
                            type="checkbox"
                            className="custom-control-input"
                            id={row.name}
                            onChange={() => statusChangeHandler(row.id)}
                        />
                        <label style={{ cursor: 'pointer' }} className="custom-control-label" htmlFor={row.name}></label>
                    </div>
                ) : (
                    <span>Logged In</span>
                )

            )

        },
        {
            name: "Action",
            selector: (row) => (
                <div className="">
                    <button className='btn btn-info btn-sm mr-2'>
                        <Link to={`/dashboard/admin/edit/${row.id}`}>
                            <i className="fas fa-edit text-white"></i>
                        </Link>
                    </button>
                    {loggedinAdmin?.id !== row?.id ? (
                        <button className='btn btn-danger btn-sm' onClick={() => deleteHandler(row.id)}>
                            <i className="fas fa-trash"></i>
                        </button>
                    ) : (
                        <span>Logged In</span>
                    )}

                </div>
            ),
        },
    ];

    return (
        <>
            <div className="content-wrapper">

                <Breadcrumb name={'All admins'} />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">

                                    <div className="card-body">

                                        {
                                            isFetching ? (
                                                <Spinner />
                                            ) : (
                                                <DataTable
                                                    title="Admin List"
                                                    actions={
                                                        <div className="card-tools">
                                                            <button className="float-right btn-sm">
                                                                <Link to={'/dashboard/admin/create'}>+ Add new</Link>
                                                            </button>
                                                        </div>
                                                    }
                                                    selectableRows
                                                    columns={columns}
                                                    data={filteredItems}
                                                    pagination
                                                    subHeader
                                                    subHeaderComponent={
                                                        <input
                                                            type="text"
                                                            placeholder="Search..."
                                                            className=""
                                                            value={search}
                                                            onChange={(e) => setSearch(e.target.value)}
                                                        />
                                                    }
                                                />
                                            )
                                        }

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

export default AdminAll;
