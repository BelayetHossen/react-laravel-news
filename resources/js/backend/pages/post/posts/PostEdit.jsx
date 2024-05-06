import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Breadcrumb from '../../../shared/Breadcrumb';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SiteContext } from '../../../context/ContextProvider';
import SubmitSpinner from '../../../shared/SubmitSpinner';
import JoditEditor from 'jodit-react';




const PostEdit = () => {
    const { MAIN_URL, loading, setLoading } = useContext(SiteContext);
    const [postData, setPostData] = useState(null);
    const [categories, setCategories] = useState(null);
    const [subCategories, setSubCategories] = useState(null);
    const [subSubCategories, setSubSubCategories] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();


    const editor = useRef(null);
    const [content, setContent] = useState("");






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
    // get sub-sub category by change sub-category
    const subCategoryChange = (id) => {
        axios.get(`${MAIN_URL}/api/subsubcategory-by-subcategory/get/${id}`)
            .then(response => {
                setSubSubCategories(response.data.data.sub_sub_category);
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
    // Fetch  sub-Categories all data
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
    // Fetch sub-sub-Categories all data
    useEffect(() => {
        axios.get(`${MAIN_URL}/api/subsubcategory/all`)
            .then(response => {
                setSubSubCategories(response.data.subSubCategories);
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

    // Fetch post data by ID
    useEffect(() => {
        axios.get(`${MAIN_URL}/api/post/get/${id}`)
            .then(response => {
                setPostData(response.data.post);
                setImage(MAIN_URL + "/images/posts/" + response.data.post?.photo);
                setContent(response.data.post?.description);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching category data:', error);
                setLoading(false);
            });
    }, []);

    const [errors, setErrors] = useState({
        title: '',
        category_id: '',
        description: '',
    });

    // update system
    const submitPost = (e) => {
        e.preventDefault();
        setLoading(true);
        const id = e.target.id.value;
        const title = e.target.title.value;
        const category_id = e.target.category_id.value;
        const sub_category_id = e.target.sub_category_id.value;
        const sub_sub_category_id = e.target.sub_sub_category_id.value;
        const meta_title = e.target.meta_title.value;
        const meta_description = e.target.meta_description.value;
        const old_photo = e.target.old_photo.value;

        // Validation
        let formIsValid = true;
        const errorsCopy = { ...errors };

        if (title.trim() === '') {
            errorsCopy.title = 'The title is required!';
            formIsValid = false;
        } else {
            errorsCopy.title = '';
        }
        if (category_id.trim() === '') {
            errorsCopy.category_id = 'The main category is required!';
            formIsValid = false;
        } else {
            errorsCopy.category_id = '';
        }



        setErrors(errorsCopy);

        // Create FormData object
        const formData = new FormData();
        formData.append('id', id);
        formData.append('title', title);
        formData.append('description', content);
        formData.append('category_id', category_id);
        formData.append('sub_category_id', sub_category_id);
        formData.append('sub_sub_category_id', sub_sub_category_id);
        formData.append('photo', profilePhoto);
        formData.append('meta_title', meta_title);
        formData.append('meta_description', meta_description);
        formData.append('old_photo', old_photo);

        // Proceed with form submission only if form is valid
        if (!formIsValid) {
            setLoading(false);
            return;
        }

        axios.post(`${MAIN_URL}/api/post/update`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => {
                if (response?.data?.code === 201) {
                    toast.success(response?.data?.message);
                    navigate("/dashboard/post", { replace: true });
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
                <Breadcrumb name={'Add new post'} />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col m-auto">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Create new post</h3>

                                        <div className="card-tools">
                                            <button className="float-right">
                                                <Link to={'/dashboard/post'}>Back</Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={submitPost} encType="multipart/form-data">
                                            <div className="form-group">
                                                <label htmlFor="title">Title</label>
                                                <input
                                                    defaultValue={postData?.title}
                                                    name='title'
                                                    type="text"
                                                    className="form-control"
                                                    id="title"
                                                />
                                                {errors.title !== '' && <p className='text-danger'>{errors.title}</p>}
                                            </div>
                                            <input defaultValue={postData?.id} name='id' type="hidden" />
                                            <input
                                                name='old_photo'
                                                type="text"
                                                className="d-none"
                                                defaultValue={postData?.photo}
                                            />
                                            <div className="form-group">
                                                <label htmlFor="name">Description</label>
                                                <JoditEditor
                                                    ref={editor}
                                                    value={content}
                                                    onChange={newContent => setContent(newContent)}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Main category name</label>

                                                <select
                                                    className="form-control"
                                                    name='category_id'
                                                    onChange={(e) => categoryChange(e.target.value)}
                                                >
                                                    <option value="">-Select-</option>
                                                    {categories?.map((item, index) => (
                                                        <option key={index} value={item.id} selected={postData?.main_category?.id === item.id}>
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
                                                    onChange={(e) => subCategoryChange(e.target.value)}
                                                >
                                                    <option value="">-Select-</option>
                                                    {subCategories?.map((item, index) => (
                                                        <option key={index} value={item.id} selected={postData?.sub_category?.id === item.id}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Sub-Sub category name</label>
                                                <select
                                                    className="form-control"
                                                    name='sub_sub_category_id'
                                                >
                                                    <option value="">-Select-</option>
                                                    {subSubCategories?.map((item, index) => (
                                                        <option key={index} value={item.id} selected={postData?.main_category?.id === item.id}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>


                                            <div className="form-group">
                                                <label>Post photo</label>
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
                                                        />
                                                    </>
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
                                            <div>
                                                <h5>SEO option<small> (optional)</small></h5>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="meta_title">Meta title </label>
                                                <input
                                                    defaultValue={postData?.meta_title}
                                                    name='meta_title'
                                                    type="text"
                                                    className="form-control"
                                                    id="meta_title"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="meta_description">Meta description</label>
                                                <textarea className="form-control" name="meta_description" id="meta_description" rows="3">{postData?.meta_description}</textarea>
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




export default PostEdit;
