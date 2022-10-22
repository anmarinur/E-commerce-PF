import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { useState, useEffect } from "react";
import {
    addToCart,
    adjustQuantity,
    deleteFromCart,
    LoadCurrentItem,
} from "../../redux/actions";

function ProductTrElement(props) {
    const dispatch = useDispatch();

    let addToCart = props.addToCart;
    let adjustQuantity = props.adjustQuantity;
    let deleteFromCart = props.deleteFromCart;
    let deleteFromWish = props.deleteFromWish;
    const LoadCurrentItem = props.LoadCurrentItem;

    const [inputQty, setinputQty] = useState(props.product.qty);
    const [subTotal, setsubTotal] = useState(0);

    useEffect(() => {
        const input = document.querySelector('input');
        const subTotalll = inputQty * props.product.price;
        setsubTotal(subTotal + subTotalll);
        let subTotShow = input.parentNode.parentNode.children[4];
        subTotShow.innerHTML = `${subTotalll}`;

    }, [inputQty, setsubTotal, props.product.price])

    const onChangeQuantity = (event) => {
        event.preventDefault();
        let btn = event.currentTarget;
        setinputQty(btn.value);
        LoadCurrentItem(props.product)
        adjustQuantity(props.product.id, btn.value);
        if (btn.value === btn.max) {
            alert("This is the last quantity for this product");
        }
        const subTotall = inputQty * props.product.price;
        setsubTotal(subTotal + subTotall);
        let subTotShow = btn.parentNode.parentNode.children[4];
        subTotShow.innerHTML = `${subTotall}`;
    };

    return (
        <tr key={props.product.id}>
            <td>
                <Link to={`/product/${props.product.id}`}>
                    <img
                        src={props.product.image}
                        alt="productImg"
                        onClick={() => LoadCurrentItem(props.product)}
                        style={{ maxHeight: '5em' }}
                    />
                </Link>
            </td>
            <td className="align-middle" onClick={() => LoadCurrentItem(props.product)}>
                <Link className="text-nowrap fs-6 " to={`/product/${props.product.id}`}>{props.product.name}</Link>
            </td>
            <td className="price-new align-middle" >$ {props.product.price}</td>
            {!props.isWish ? (
                <td className="align-middle" style={{ maxWidth: '1em', minHeight: '1em' }} >
                    <input
                        className="form-control form-control-sm text-center"
                        type="number"
                        id="qty"
                        name="qty"
                        min="1"
                        max={props.product.maxQuantity}
                        step="1"
                        // defaultValue="1"
                        value={inputQty}
                        onChange={onChangeQuantity}
                    />
                </td>
            ) : (
                ""
            )}
            {!props.isWish ? (
                <td className="subTotalShow align-middle">$ {props.product.price}</td>
            ) : (
                ""
            )}
            <td className="align-middle">
                {!props.isCart ? (
                    <Button
                        variant="dark"
                        size="sm"
                        onClick={(e) => addToCart(e, props.product, props.product.id)}
                    >
                        Add To Cart
                    </Button>
                ) : (
                    <Button
                        variant="dark"
                        size="sm"
                        className="ms-2"
                        onClick={(e) => deleteFromCart(e, props.product.id)}
                    >
                      <i className="fa-solid fa-xmark"></i>  
                    </Button>
                )}
                {!props.isWish ? (
                    ""
                ) : (
                    <Button
                        variant="dark"
                        size="sm"
                        className="ms-2"
                        onClick={(e) => deleteFromWish(e, props.product)}
                    >

                    </Button>
                )}
            </td>
        </tr>
    );
}

const mapStatetoProps = (state) => {
    return {
      currentItem: state.cart.currentItem,
    };
  };


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (e, product, id) => dispatch(addToCart(e, product, id)),
        adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
        deleteFromCart: (e, id) => dispatch(deleteFromCart(e, id)),
        LoadCurrentItem: (product) => dispatch(LoadCurrentItem(product)),
    };
};
export default connect(mapStatetoProps, mapDispatchToProps)(ProductTrElement);
//export default connect( null, mapDispatchToProps)(ProductTrElement);
