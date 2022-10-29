import React, {useState} from 'react';
import axios from "axios";
import { useAuth0 } from '@auth0/auth0-react';


const UsersCard = ({user}) => {
    const { getAccessTokenSilently } = useAuth0();
    const [userOrders, setUserOrders] = useState([])

    async function getUserOrders(userEmail) {
        const token = await getAccessTokenSilently()
        try {
            var result = await axios.get(`/order/email/${userEmail}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUserOrders(result.data)
        } catch (error) {
            console.log("getUserOrders Error:", error)
        }
    }

    async function blockUnblock (email, boolean){
        try {
            const token = await getAccessTokenSilently()
            await axios.put(`/user/block/${email}/${boolean}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log("blockUnblock Error:", error)
        }
    }

    return(<>
            <tr>
                <td className='fw-semibold col-1'>{user.id}</td>
                <td width={'6em'} className='text-center col-1'>
                    <img style={{ maxWidth: '5em', maxHeight: '5em', minWidth: '3em', minHeight: '3em' }} src={user.image} alt="IMG_PRODUCT" />
                </td>
                <th className='col-2 ps-4'>{user.name}</th>
                <td className='fw-semibold col-2'>{user.email}</td>
                <td className="col-1">{user.phone}</td>
                {user.block == false ? <td className='col-1'>No</td> : <td className='col-1'>Yes</td>}
                {user.block == false ? 
                    <td className='col-1'>
                        <button className='btn btn-danger' onClick={() => blockUnblock(user.email, true)}>Block</button>
                    </td> 
                : <td className='col-1'>
                    <button className='btn btn-danger' onClick={() => blockUnblock(user.email, false)}>Unblock</button>
                    </td>
                }
                <td className='col-2'>
                    <button className='btn btn-success' onClick={() => getUserOrders(user.email)}>See client Orders</button>
                </td>
            </tr>
            <tr>
                {userOrders}
            </tr>
        </>
    )
}

export default UsersCard;