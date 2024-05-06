import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../shared/Breadcrumb';
import { useQuery } from 'react-query';
import DataTable from 'react-data-table-component';
import { toast } from 'react-toastify';
import Spinner from '../../../shared/Spinner';
import Swal from 'sweetalert2';
import { SiteContext } from '../../../context/ContextProvider';

const CategoryAll = () => {
    const { MAIN_URL, loading, setLoading } = useContext(SiteContext);
    const { isPending, data: categoryData = [], isFetching, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => axios
            .get(`${MAIN_URL}/api/category/all`)
            .then((res) => res.data.categories),
    });
    const [search, setSearch] = useState("");
    const filteredItems = categoryData?.filter(
        (item) =>
            item.name && item.name.toLowerCase().includes(search.toLowerCase())
    );

    // status change system
    const statusChangeHandler = (id) => {
        setLoading(true);
        axios
            .get(`${MAIN_URL}/api/category/status/${id}`)
            .then((response) => {
                if (response.data.code == 201) {
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
                    .get(`${MAIN_URL}/api/category/delete/${id}`)
                    .then((response) => {
                        if (response.data.code == 201) {
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
            name: "Name",
            selector: (row) => (
                <>
                    <div className="">
                        <p className="">{row.name}</p>
                    </div>
                </>
            ),
        },
        {
            name: "Photo",
            selector: (row) => (
                <>
                    <img className='rounded w-25 my-1' src={MAIN_URL + "/images/categories/" + row.photo} alt="" />
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
                        id={row.name}
                        onChange={() => statusChangeHandler(row.id)}
                    />
                    <label style={{ cursor: 'pointer' }} className="custom-control-label" htmlFor={row.name}></label>
                </div>
            )

        },
        {
            name: "Action",
            selector: (row) => (
                <div className="">
                    <button className='btn btn-info btn-sm mr-2'>
                        <Link to={`/dashboard/post/category/edit/${row.id}`}>
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

                <Breadcrumb name={'All categories'} />

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
                                                    title="Categories List"
                                                    actions={
                                                        <div className="card-tools">
                                                            <button className="float-right btn-sm">
                                                                <Link to={'/dashboard/post/category/create'}>+ Add new</Link>
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

export default CategoryAll;
