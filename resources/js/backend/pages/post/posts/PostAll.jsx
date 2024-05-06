import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../shared/Breadcrumb';
import { useQuery } from 'react-query';
import DataTable from 'react-data-table-component';
import { toast } from 'react-toastify';
import Spinner from '../../../shared/Spinner';
import Swal from 'sweetalert2';
import { SiteContext } from '../../../context/ContextProvider';

const PostAll = () => {
    const { MAIN_URL, loading, setLoading } = useContext(SiteContext);
    const { isPending, data: permissionData = [], isFetching, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => axios
            .get(`${MAIN_URL}/api/post/all`)
            .then((res) => res.data.posts),
    });
    const [search, setSearch] = useState("");
    const filteredItems = permissionData?.filter(
        (item) =>
            item.title && item.title.toLowerCase().includes(search.toLowerCase())
    );
    // Post status change system
    const statusChangeHandler = (id) => {
        setLoading(true);
        axios
            .get(`${MAIN_URL}/api/post/status/${id}`)
            .then((response) => {
                if (response.data.code == 200) {
                    toast.success(response.data.message);
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
                    .get(`${MAIN_URL}/api/post/delete/${id}`)
                    .then((response) => {
                        if (response.data.code == 200) {
                            toast.success(response.data.message);
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
            name: "Title",
            selector: (row) => (
                <div className='d-flex align-items-center'>

                    {
                        row.photo && <img className='rounded w-25 my-1 mr-2' src={MAIN_URL + "/images/posts/" + row.photo} alt="" />
                    }
                    {

                        row.title.length > 20 ? <p className="">{row.title.substring(0, 20) + "..."}</p> : <p className="">{row.title}</p>
                    }
                </div>
            ),
        },
        {
            name: "Category",
            selector: (row) => (
                <>
                    <p className="">{row.main_category?.name}</p>
                </>
            ),
        },
        {
            name: "Sub-Category",
            selector: (row) => (
                <>
                    {
                        row.sub_category && <p className="">{row.sub_category?.name}</p>
                    }
                </>
            ),
        },
        {
            name: "Sub-Sub-Category",
            selector: (row) => (
                <>
                    {
                        row.sub_sub_category && <p className="">{row.sub_sub_category?.name}</p>
                    }
                </>
            ),
        },
        {
            name: "Status",
            selector: (row) => (
                <div className="custom-control custom-switch">
                    <input
                        style={{ cursor: 'pointer' }}
                        defaultChecked={row.status === 1}
                        type="checkbox"
                        className="custom-control-input"
                        id={row.id}
                        onChange={() => statusChangeHandler(row.id)}
                    />
                    <label style={{ cursor: 'pointer' }} className="custom-control-label" htmlFor={row.id}></label>
                </div>
            )

        },
        {
            name: "Action",
            selector: (row) => (
                <div className="">
                    <button className='btn btn-info btn-sm mr-2'>
                        <Link to={`/dashboard/post/edit/${row.id}`}>
                            <i className="fas fa-edit text-white"></i>
                        </Link>
                    </button>
                    <button className='btn btn-danger btn-sm' onClick={() => deleteHandler(row.id)}>
                        <i className="fas fa-trash"></i>
                    </button>

                </div>
            ),
        },
    ];

    return (
        <>
            <div className="content-wrapper">

                <Breadcrumb name={'All Posts'} />

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
                                                    title="Posts List"
                                                    actions={
                                                        <div className="card-tools">
                                                            <button className="float-right btn-sm">
                                                                <Link to={'/dashboard/post/create'}>+ Add new</Link>
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

export default PostAll;
