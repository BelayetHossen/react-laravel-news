import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Breadcrumb from '../../../shared/Breadcrumb';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SiteContext } from '../../../context/ContextProvider';
import SubmitSpinner from '../../../shared/SubmitSpinner';

const SubSubCategoryEdit = () => {
    const { MAIN_URL, loading, setLoading } = useContext(SiteContext);
    const [categoryData, setCategoryData] = useState(null);
    const [categories, setCategories] = useState(null);
    const [subCategories, setSubCategories] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const [nameCheck, setNameCheck] = useState(null);
    const [errors, setErrors] = useState({
        name: '',
        category_id: '',
        sub_category_id: '',
    });




    // get sub category by change category
    const categoryChange = (id) => {
        axios.get(`${MAIN_URL}/api/subcategory-by-category/get/${id}`)
            .then(response => {
                setSubCategories(response.data.data.sub_category);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching permission data:', error);
                setLoading(false);
            });
    }

    // Fetch Categories all data
    useEffect(() => {
        axios.get(`${MAIN_URL}/api/category/all`)
            .then(response => {
                setCategories(response.data.categories);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching permission data:', error);
                setLoading(false);
            });
    }, []);
    // Fetch Categories all data
    useEffect(() => {
        axios.get(`${MAIN_URL}/api/subcategory/all`)
            .then(response => {
                setSubCategories(response.data.subCategories);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching permission data:', error);
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

    // Fetch sub sub category data by ID
    useEffect(() => {
        axios.get(`${MAIN_URL}/api/subsubcategory/get/${id}`)
            .then(response => {
                setCategoryData(response.data.subSubCategory);
                setImage(MAIN_URL + "/images/categories/" + response.data.subSubCategory?.photo);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching category data:', error);
                setLoading(false);
            });
    }, [id]);



    // update system
    const updateCategory = (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const name = e.target.name.value;
        const category_id = e.target.category_id.value;
        const sub_category_id = e.target.sub_category_id.value;
        const old_photo = e.target.old_photo.value;

        // Validation
        let formIsValid = true;
        const errorsCopy = { ...errors };

        if (name.trim() === '') {
            errorsCopy.name = 'The name is required!';
            formIsValid = false;
        } else {
            errorsCopy.name = '';
        }
        if (category_id.trim() === '') {
            errorsCopy.category_id = 'The main category is required!';
            formIsValid = false;
        } else {
            errorsCopy.category_id = '';
        }
        if (sub_category_id.trim() === '') {
            errorsCopy.sub_category_id = 'The sub category is required!';
            formIsValid = false;
        } else {
            errorsCopy.sub_category_id = '';
        }
        setErrors(errorsCopy);

        // Proceed with form submission only if form is valid
        if (!formIsValid) {
            setLoading(false);
            return;
        }
        // Create FormData object
        const formData = new FormData();
        formData.append('id', id);
        formData.append('name', name);
        formData.append('category_id', category_id);
        formData.append('sub_category_id', sub_category_id);
        formData.append('old_photo', old_photo);
        formData.append('photo', profilePhoto);
        axios.post(`${MAIN_URL}/api/subsubcategory/update`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => {
                if (response?.data?.code === 201) {
                    toast.success(response?.data?.message);
                    navigate("/dashboard/post/subsubcategory", { replace: true });
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
                <Breadcrumb name={'Edit/modify sub-sub-category'} />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Edit sub-sub-category</h3>

                                        <div className="card-tools">
                                            <button className="float-right">
                                                <Link to={'/dashboard/post/subsubcategory'}>Back</Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={updateCategory}>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input
                                                    defaultValue={categoryData?.name}
                                                    name='name'
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Enter name"

                                                />
                                                {errors.name !== '' && <p className='text-danger'>{errors.name}</p>}
                                                {nameCheck && <p className='text-danger'>{nameCheck}</p>}
                                            </div>
                                            <input defaultValue={categoryData?.id} name='id' type="hidden" />
                                            <input
                                                name='old_photo'
                                                type="text"
                                                className="d-none"
                                                defaultValue={categoryData?.photo}
                                            />
                                            <div className="form-group">
                                                <label>Main category name</label>

                                                <select
                                                    className="form-control"
                                                    name='category_id'
                                                    onChange={(e) => categoryChange(e.target.value)}
                                                >
                                                    <option value="">-Select-</option>
                                                    {categories?.map((item, index) => (
                                                        <option key={index} value={item.id} selected={categoryData?.category_id === item.id}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.category_id !== '' && <p className='text-danger'>{errors.category_id}</p>}
                                            </div>

                                            <div className="form-group">
                                                <label>Sub category name</label>
                                                <select
                                                    className="form-control"
                                                    name='sub_category_id'
                                                >
                                                    <option value="">-Select-</option>
                                                    {subCategories?.map((item, index) => (
                                                        <option key={index} value={item.id} selected={categoryData?.sub_category_id == item.id}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.sub_category_id !== '' && <p className='text-danger'>{errors.sub_category_id}</p>}
                                            </div>


                                            <div className="form-group">
                                                <label>Photo</label>
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



export default SubSubCategoryEdit;
