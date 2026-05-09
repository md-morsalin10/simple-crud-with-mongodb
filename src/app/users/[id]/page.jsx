import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserDetails =async ({params}) => {
    const {id} = await params;

    const user = await getUserById(id);

    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
};

export default UserDetails;