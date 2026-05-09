import { updatedUser } from '@/app/lib/action';
import { getUserById } from '@/app/lib/data';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const UserUpdate = async ({ params }) => {
    const { id } = await params;
    console.log(id, "params");

    const user = await getUserById(id);
    console.log(user, "edit section");

    const updateUserWrapper=async(formData)=>{
        'use server'
        return updatedUser(formData, id)
    }


    return (
        <div>
            <h2>User update</h2>
            <div className='w-2xl mx-auto'>
                <form action={updateUserWrapper} className="flex flex-col gap-4">
                    <TextField  className="w-full" name="name" defaultValue={user?.name}  type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="email" defaultValue={user?.email} type="email">
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField className="w-full" name="role" defaultValue={user?.role} type="tel">
                        <Label>Role</Label>
                        <Input placeholder="Enter your Role" />
                    </TextField>
                    <div className='flex gap-5'>
                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" slot="close">Update user</Button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UserUpdate;