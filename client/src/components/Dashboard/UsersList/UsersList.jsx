import React, {useState, useEffect} from "react";
import axios from "axios";
import { useAuth0 } from '@auth0/auth0-react'
import ReactPaginate from 'react-paginate';
import UsersCard from './UsersCard';



const GetAllUsers = () =>{
    const { getAccessTokenSilently } = useAuth0();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);

    async function getUsersFromDb (page, search){
        try {
            const token = await getAccessTokenSilently()
            const result = await axios.get(`/user?size=12&page=${page}&search=${search}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTotalPages(result.data.totalPages)
            setUsers(result.data.products)
        } catch (error) {
            console.log("getAllOrders Error:", error)
        }
    }

    useEffect(()=>{
        getUsersFromDb(page, search)
    },[page, search])


    const handlePageClick = (event) => {
        setPage(event.selected)
    };


    return(
        <div>
            {users.length !== 0 ? users.map(user =>
                            <UsersCard key={user.id} user={user} />
                    ) : <h4 className='text-danger'>Users not Found</h4>
                    }
            <nav aria-label="navigation">
                { totalPages !==0 ?
                    <ReactPaginate
                        breakLabel=" . . ."
                        breakLinkClassName='page-link'
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={totalPages}
                        previousLabel="<"
                        renderOnZeroPageCount={1}
                        className="pagination justify-content-center"
                        pageClassName="page-item "
                        pageLinkClassName="page-link "
                        activeClassName="active"
                        previousClassName="page-item"
                        nextClassName="page-item"
                        previousLinkClassName="page-link"
                        nextLinkClassName="page-link"
                    />  
                : null }
            </nav>
        </div>
    )
}

export default GetAllUsers