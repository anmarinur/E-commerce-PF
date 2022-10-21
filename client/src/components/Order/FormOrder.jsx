import React, { useState } from 'react'


const FormOrder = () => {


    const [inputOrder, setinputOrder] = useState({
        email: '',
        contactName: '',
        city: '',
        department: '',
        streetAddress: '',
        postalCode: '',
        contactNumber: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        contactName: '',
        city: ''

    })


    function validate(input) {
        if (input.email === '') {
            errors.email = 'Email is required';
        } else if (! /\S+@\S+\.\S+/.test(input.email)) {
            errors.email = 'Enter a valid email';
        } else {
            errors.email = '';
        }

        if (input.contactName === '') {
            errors.contactName = 'Contact Name is required';
        } else {
            errors.contactName = '';
        }

        if (input.city === '') {
            errors.city = 'City is required';
        } else {
            errors.city = '';
        }

        if (input.department === '') {
            errors.department = 'Department is required';
        } else {
            errors.department = '';
        }

        if (input.streetAddress === '') {
            errors.streetAddress = 'Street Address is required';
        } else {
            errors.streetAddress = '';
        }




        if (input.postalCode === '') {
            errors.postalCode = 'Postal Code is required';
        }  else {
            errors.postalCode = '';
        }
        

        if (input.contactNumber === '') {
            errors.contactNumber = 'Contact Number is required';
        } else {
            errors.contactNumber = '';
        }


        return errors;
    }



    function handleChange(e) {
        e.preventDefault();
        setinputOrder({
            ...inputOrder,
            [e.target.name]: e.target.value
        })

        setErrors(
            validate({
                ...inputOrder,
                [e.target.name]: e.target.value
            })
        )
    }

    return (
        <>
            <form autoComplete='off' >
                <div className="form-floating mb-3">
                    <input type="email" className={errors.email ? "form-control border border-danger" : "form-control"} id="email" name='email' value={inputOrder.email} onChange={handleChange} />
                    <label htmlFor="email">Email</label>
                    {errors.email && <span className="ms-2 text-danger">{errors.email}</span>}
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className={errors.contactName ? "form-control border border-danger" : "form-control"} id="contactName" name='contactName' value={inputOrder.contactName} onChange={handleChange} />
                    <label htmlFor="contactName">Contact Name</label>
                    {errors.contactName && <span className="ms-2 text-danger">{errors.contactName}</span>}
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <div className="form-floating ">
                            <input type="text" className={errors.city ? "form-control border border-danger" : "form-control"} id="city" name='city' value={inputOrder.city} onChange={handleChange} />
                            <label htmlFor="floatingPassword">City</label>
                            {errors.city && <span className="ms-2 text-danger">{errors.city}</span>}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating" >
                            <input type="text" className={errors.department ? "form-control border border-danger" : "form-control"} id="department" name='department' value={inputOrder.department} onChange={handleChange} />
                            <label htmlFor="floatingPassword">Department or Region</label>
                            {errors.department && <span className="ms-2 text-danger">{errors.department}</span>}
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-6">
                        <div className="form-floating ">
                            <input type="text" className={errors.streetAddress ? "form-control border border-danger" : "form-control"} id="streetAddress" name='streetAddress' value={inputOrder.streetAddress} onChange={handleChange} />
                            <label htmlFor="floatingPassword">Street Address</label>
                            {errors.streetAddress && <span className="ms-2 text-danger">{errors.streetAddress}</span>}
                        </div>
                    </div>
                    <div className="col-6 mb-3">
                        <div className="form-floating ">
                            <input type="number" className={errors.postalCode ? "form-control border border-danger" : "form-control"} id="postalCode" name='postalCode' value={inputOrder.postalCode} onChange={handleChange} />
                            <label htmlFor="floatingPassword">Postal Code</label>
                            {errors.postalCode && <span className="ms-2 text-danger">{errors.postalCode}</span>}
                        </div>
                    </div>
                    <div className="col-12 ">
                        <div className="form-floating ">
                            <input type="number" className={errors.contactNumber ? "form-control border border-danger" : "form-control"} id="contactNumber" name='contactNumber' value={inputOrder.contactNumber} onChange={handleChange} />
                            <label htmlFor="floatingPassword">Contact Number</label>
                            {errors.contactNumber && <span className="ms-2 text-danger">{errors.contactNumber}</span>}
                        </div>
                    </div>
                </div>
            </form>


        </>
    )
}

export default FormOrder;