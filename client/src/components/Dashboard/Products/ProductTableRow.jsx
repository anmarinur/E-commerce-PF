import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../redux/actions';
import { nameCategory } from '../../../utils/nameCategory';


export default function ProductsTableRow({ p, deleteP, updateProduct, setShow, setId }) {

    const categories = useSelector(state=>state.categories);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(categories.length===0) dispatch(getCategories()); 
    },[]);

    function delPro() {
        setShow(true);
        setId(p.id);

    }

    return (
        <>
            <tr key={p.id}>
                <td scope="row" width={'6em'} className='text-center'>
                    <img style={{ maxWidth: '5em', maxHeight: '5em', minWidth: '3em', minHeight: '3em' }} src={p.image} alt="IMG_PRODUCT" />

                </td>
                <th className=''>{p.name}</th>
                <td className='fw-semibold'>{p.price}</td>
                <td className='fw-semibold'>{nameCategory(categories, p.CategoryId)}</td>
                <td className='fw-semibold'>{p.brand}</td>
                <td className='fw-semibold'>
                    <span className='bg-secondary p-1 rounded-pill fw-bold text-white'> {p.stock} </span> 
                </td>



                <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-sm btn-primary" onClick={delPro}><i className="fa-solid fa-trash"></i></button>
                        <button type="button" className="btn btn-sm btn-warning" onClick={() => updateProduct(
                            {
                                id: p.id,
                                name: p.name,
                                image: p.image,
                                brand: p.brand,
                                description: p.description,
                                price: p.price,
                                CategoryId: p.CategoryId,
                                stock: p.stock,
                            })
                        }><i className="fa-solid fa-pen-to-square"></i></button>
                    </div>
                </td>
            </tr>



        </>
    )
}
