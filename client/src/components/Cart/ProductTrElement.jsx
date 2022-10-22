import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


function ProductTrElement(props) {

    const [render, setRender] = useState(false);


    function handleClick ( e ,id ){
        setRender(!render)
        props.editCart(e.target.value ,id )
    }

    return (
        <tr key={props.product.id}>
            <td>
                <Link to={`/product/${props.product.id}`}>
                    <img
                        src={props.product.image}
                        alt="productImg"
                        style={{ maxHeight: '5em' }}
                    />
                </Link>
            </td>
            <td className="align-middle" >
                <Link className="text-decoration-none text-dark fw-semibold fs-6 " to={`/product/${props.product.id}`}>{props.product.name}</Link>
            </td>
            <td className="align-middle fw-semibold" >$ {props.product.price}</td>

            <td className="align-middle" style={{ maxWidth: '1em', minHeight: '1em' }} >
                <input
                    className="form-control form-control-sm text-center fw-bold"
                    type="number"
                    id="qty"
                    name="qty"
                    min={1}
                    onChange={(e,id) => handleClick(e,props.product.id) }
                    defaultValue={props.product.cant}

                />
            </td>

            {!props.isWish ? (
                <td className="subTotalShow align-middle fw-semibold">$ {props.product.subTotal}</td>
            ) : (
                ""
            )}
            <td className="align-middle">

                <Button
                    variant="dark"
                    size="sm"
                    className="ms-2"
                    onClick={(id) => props.removeCart( props.product.id) }
                >
                    <i className="fa-solid fa-xmark"></i>
                </Button>

                {!props.isWish ? (
                    ""
                ) : (
                    <Button
                        variant="dark"
                        size="sm"
                        className="ms-2"

                    >

                    </Button>
                )}
            </td>
        </tr>
    );
}


export default ProductTrElement;
//export default connect( null, mapDispatchToProps)(ProductTrElement);
