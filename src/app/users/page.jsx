import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '@/components/UsersTable';
import { createUsers, deleteUser } from '../lib/action';
import AddUsers from '@/components/AddUsers';

const UsersPage =async() => {
    const usersData =await getUsers();

    console.log(usersData);
    
    return (
        <div>
            <h1>UsersManagement: {usersData.length}</h1>
            <div className='flex justify-center items-center py-4'>
                <AddUsers  userDataCreate={createUsers}/>
            </div>
            <UsersTable deleteUserData={deleteUser}  usersData={usersData}/>

          
        </div>
    );
};

export default UsersPage;