import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '@/components/UsersTable';

const UsersPage =async() => {
    const usersData =await getUsers();

    console.log(usersData);
    
    return (
        <div>
            <h1>UsersManagement: {usersData.length}</h1>
            <UsersTable  usersData={usersData}/>

            {/* {
                usersData.map(user=> <UsersTable key={user._id} user={user}></UsersTable>)
            } */}
        </div>
    );
};

export default UsersPage;