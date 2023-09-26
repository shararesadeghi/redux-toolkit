import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';

const Users = () => {
    const users = useSelector(state=>state.users);
    const dispatch = useDispatch();
    console.log(users)

    useEffect(()=>{
        dispatch(fetchUsers());
    },[])
    return (
        <div>
            <h2>Users</h2>
            { 
                users.loading ? <h3>Loading ...</h3> : null
            }
            {
                users.users.length ? users.users.map(user=>
                    <p key={user.id}>{user.name}</p>): null
            }
        </div>
    );
};

export default Users;