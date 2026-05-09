import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const createUsers = async (formData) => {
    'use server'

    const newUser = Object.fromEntries(formData.entries())
    console.log("new users data", newUser);

    const res = await fetch('http://localhost:5000/users', {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(newUser)
    })
    const data = await res.json();
    console.log("data after post", data);

    // todo revalidate path
    if (data.insertedId) {
        revalidatePath("/users")
    }
    return data;
}


export const updatedUser = async (formData, id) => {
    'use server'

    const updateUser = Object.fromEntries(formData.entries())
    const res = await fetch(`http://localhost:5000/users/${id}`, {
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateUser)
    })
    const data = await res.json();
    console.log("after update", data);
    if (data.modifiedCount > 0) {
        revalidatePath('/users');
        redirect('/users')
    }
    return data

}


export const deleteUser = async (userId) => {
    'use server'
    const res = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "DELETE"
    })
    const data = await res.json();
    console.log("after delete", data);

    // revalidate 
    if (data.deletedCount > 0) {
        revalidatePath('/users')
        redirect('/users');
    }

    return data
}