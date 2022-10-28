import React from 'react';


const UsersCard = ({user}) => {
    return(
        <p>{user.name + " " + user.email + " " + user.id}</p>
    )

}

export default UsersCard;