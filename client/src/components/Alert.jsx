import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useDispatch } from "react-redux";
import { setAlert } from "../redux/actions";

const Alert = ({ data }) => {
    const dispatch = useDispatch();

    return (
        <div
            
        >
            <ToastContainer position="top-start" className="p-3 position-fixed">
                <Toast  onClose={() => dispatch(setAlert({ show : false }))} show={data.show} delay={3000} autohide>
                    <Toast.Header>
                        { data.type === 'success' ? <i className="fa-solid fa-circle-check me-2 text-success"></i> :
                            <i class="fa-solid fa-triangle-exclamation me-2 text-danger"></i> }   
                        <strong className="me-auto">{data.title}</strong>
                    </Toast.Header>
                    <Toast.Body>{data.body}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}
export default Alert;