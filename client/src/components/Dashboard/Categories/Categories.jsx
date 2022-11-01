import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Categories() {


    const [categories, setCategories] = React.useState(0);
    const { getAccessTokenSilently } = useAuth0();
    const [id, setId] = React.useState();

    const [open, setOpen] = React.useState(false);

    const closeModal = () => {
        setOpen(false)
        return;
    };

    React.useEffect(() => {
        getAllCategories()
    }, [])

    const getAllCategories = async () => {
        const result = await axios.get('/category')
        setCategories(result.data);
    }

    const deleteCategory = async (id) => {
        setOpen(o => !o)
        setId(id);
    }

    const deleteOnClick = async (id) => {
        const token = await getAccessTokenSilently()

        try {
            const result = await axios.delete(`/category/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })           
        } catch (error) {

        }
        setOpen(false)
        getAllCategories()
    }


    return (
        <div className='container-fluid mt-4'>
            <div className="row">
                <div className="col-12">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className='fw-semibold fs-5'>Id</th>
                                <th className='fw-semibold fs-5'>Name</th>
                                <th><Link to='/Dashboard/Categories/Create' className="btn btn-sm btn-info fw-bold"><i className="me-2 fa-solid fa-plus"></i>New Category</Link></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                categories !== 0 ? categories.map(category =>
                                (
                                    <tr key={category.id}>
                                        <td className="fw-bold">{category.id}</td>
                                        <td className="fw-bold">{category.category}</td>
                                        <td className="">
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button onClick={() => deleteCategory(category.id)} type="button" className="btn btn-sm btn-danger"><i className="fa-solid fa-trash"></i></button>
                                                <Link to={`/Dashboard/Categories/Update/${category.id}/${category.category}`} type="button" className="btn btn-sm btn-warning"><i className="fa-solid fa-pen-to-square"></i></Link>
                                            </div>
                                        </td>
                                    </tr>
                                )) :
                                    (<tr><td colSpan={3} > No Categories </td></tr>)
                            }



                        </tbody>
                    </table>


                </div>
            </div>
            <Popup open={open} closeOnDocumentClick onClose={closeModal} >
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-danger text-center font-weight-bold">Are you sure to delete the category?</h3>
                    </div>
                    <div className="col-12 text-center">
                        <div class="btn-group mx-auto" role="group" aria-label="Basic example">
                            <button onClick={() => deleteOnClick(id) } type="button" class="btn btn-success">Yes</button>
                            <button type="button" class="btn btn-danger">No</button>
                        </div>
                    </div>
                </div>


            </Popup>
        </div>
    )
}