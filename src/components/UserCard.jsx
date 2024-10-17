import {useState} from 'react'

const UserCard = ({user}) => {
    return(
        <div>
            <h1>{user?.name || "Unknown user"}</h1>
            {user && user.avatar_url !== 'N/A' && (
            <img src = {user.avatar_url} />
            )}
            <h3>{user?.repos_url}</h3>
            <h3>{"This user has " + user?.followers + " followers."}</h3>
        </div>
    )
}

export default UserCard;