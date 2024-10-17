import UserCard from './UserCard/'

const UserCardList = ({users}) => {

    return(
        <>
            {users.map((user, index) => (
                <UserCard key={index} user={user} />
            ))}
        </>
    );
}

export default UserCardList;