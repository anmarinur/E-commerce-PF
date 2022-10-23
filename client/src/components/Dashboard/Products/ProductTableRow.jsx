import React  from 'react';


export default function ProductsTableRow({ p, deleteP,updateProduct,setShow,setId}) {


    function delPro (){
        setShow(true);
        setId(p.id);
        
    }
    
    return (
        <>
            <tr key={p.id}>
                <th scope="row">{p.id}</th>
                <td>{p.name}</td>
                <td>{p.price}</td>
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
                                category: p.category,
                                stock: p.stock,
                            })
                        }><i className="fa-solid fa-pen-to-square"></i></button>
                    </div>
                </td>
            </tr>

            

        </>
    )
}
