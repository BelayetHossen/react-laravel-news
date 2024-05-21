import React, { useState, useEffect, useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Breadcrumb from '../../shared/Breadcrumb';
import axios from 'axios';
import { SiteContext } from '../../context/ContextProvider';
import SubmitSpinner from '../../shared/SubmitSpinner';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Menu = () => {
    const { MAIN_URL, loading, setLoading } = useContext(SiteContext);
    const [categories, setCategories] = useState(null);
    const [items, setItems] = useState([]);

    const handleDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const newItems = Array.from(items);
        const [draggedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, draggedItem);

        setItems(newItems);
    };

    console.log(items);

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

    // Fetch menu all data
    useEffect(() => {
        axios.get(`${MAIN_URL}/api/main-menu-items/all`)
            .then(response => {
                setItems(response.data?.main_menu_items);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching permission data:', error);
                setLoading(false);
            });
    }, []);


    const handleCheckboxChange = (event, changedItem) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setItems(items.concat(changedItem));
            axios.post(`${MAIN_URL}/api/main-menu/item/create`, changedItem, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => {
                    if (response?.data?.code === 201) {
                        toast.success(response?.data?.message);
                        setItems([...items, response?.data?.data]);
                    } else {
                        setNameCheck(response?.data?.message);
                    }
                    setLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setLoading(false);
                });
        } else {

            // Delete system
            setItems(items.filter(item => item.id !== changedItem.id));
            axios
                .get(`${MAIN_URL}/api/main-menu/item/delete/${changedItem.id}`)
                .then((response) => {
                    console.log(response);
                    // if (response.data.code == 200) {
                    //     toast.success(response.data.message);
                    // }
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error storing data:", error);
                    setLoading(false);
                });

        }
    };

    // Custome link add to menu
    const [nameCheck, setNameCheck] = useState(null);
    const [errors, setErrors] = useState({
        name: '',
        link: '',
    });
    const customLinkSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target.name.value;
        const link = e.target.link.value;

        // Validation
        let formIsValid = true;
        const errorsCopy = { ...errors };

        if (name.trim() === '') {
            errorsCopy.name = 'The name is required!';
            formIsValid = false;
        } else {
            errorsCopy.name = '';
        }
        if (link.trim() === '') {
            errorsCopy.link = 'The link is required!';
            formIsValid = false;
        } else {
            errorsCopy.link = '';
        }

        setErrors(errorsCopy);

        // Create FormData object
        const formData = new FormData();
        formData.append('name', name);
        formData.append('link', link);

        if (!formIsValid) {
            setLoading(false);
            return;
        }
        axios.post(`${MAIN_URL}/api/main-menu/item/create`, formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response?.data?.code === 201) {
                    toast.success(response?.data?.message);
                    setItems([...items, response?.data?.data]);
                } else {
                    setNameCheck(response?.data?.message);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });

    }

    return (
        <>
            <div className="content-wrapper">

                <Breadcrumb name={'Menu'} />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col py-1 mb-3 border-bottom">
                                <h5 className=''>Main menu</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 my-1">
                                <div className="card">
                                    <div className="card-body">
                                        <div className=''>
                                            <h6>Categories</h6>
                                            <ul className="list-group" style={{ maxHeight: '250px', overflowY: 'scroll' }}>
                                                {categories?.map((item, index) => (
                                                    <li key={item.name} className="list-group-item d-flex justify-content-between align-items-center">
                                                        <label style={{ fontSize: '12px' }}>
                                                            <input
                                                                className='mr-2'
                                                                type="checkbox"
                                                                defaultChecked={false}
                                                                onChange={(event) => handleCheckboxChange(event, item)}
                                                            />
                                                            {item.name}
                                                        </label>
                                                        <span className="badge bg-primary rounded-pill">{item.count}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                        <div className='border-top py-2 my-5'>
                                            <h6>Custom link</h6>
                                            <form onSubmit={customLinkSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="name">name</label>
                                                    <input
                                                        name='name'
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                    />
                                                    {errors.name !== '' && <p className='text-danger'>{errors.name}</p>}
                                                    {nameCheck && <p className='text-danger'>{nameCheck}</p>}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="link">Link</label>
                                                    <input
                                                        name='link'
                                                        type="text"
                                                        className="form-control"
                                                        id="link"
                                                    />
                                                    {errors.link !== '' && <p className='text-danger'>{errors.link}</p>}
                                                </div>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div></div>
                                                    {loading ? (
                                                        <SubmitSpinner />
                                                    ) : (
                                                        <button className='mt-1 btn btn-primary btn-sm' type="submit">Add link to menu</button>
                                                    )}
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-1">
                                <div className="card">
                                    <div className="card-body">
                                        <h6>Menu items</h6>
                                        <div >
                                            <DragDropContext onDragEnd={handleDragEnd}>
                                                <Droppable droppableId="droppable" direction="vertical">
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.droppableProps}
                                                            style={{
                                                                background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                                                padding: 10,
                                                            }}
                                                        >
                                                            {items?.map((item, index) => (
                                                                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                                                    {(provided, snapshot) => (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            style={{
                                                                                userSelect: 'none',
                                                                                padding: 8,
                                                                                height: '35px',
                                                                                backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                                                                color: 'white',
                                                                                fontSize: '12px',
                                                                                marginBottom: 2,
                                                                                ...provided.draggableProps.style
                                                                            }}
                                                                        >
                                                                            <i className="fas fa-bars mr-3"></i>
                                                                            {item.name}
                                                                        </div>
                                                                    )}
                                                                </Draggable>
                                                            ))}
                                                            {provided.placeholder}
                                                        </div>
                                                    )}
                                                </Droppable>
                                            </DragDropContext>
                                            <div className="my-2">
                                                {loading ? (
                                                    <SubmitSpinner />
                                                ) : (
                                                    <button className='mt-1 btn btn-primary btn-sm' type="button">Save menu</button>
                                                )}
                                            </div>
                                        </div>

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

export default Menu;
