export const deleteUser =async(userId)=>{
    const res = await fetch(``)
    const data = await res.json();
    return data 
}