import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import { onLog } from 'firebase/app';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsres = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://doctors-protal-server-imishat.vercel.app/users');
            const data = await res.json();
            console.log(data)
            return data;
        }
        
        
    });
    // creaaate user by put funtion
    const handleMakeAdmin =id=>{
    
        fetch(`https://doctors-protal-server-imishat.vercel.app/users/admin${id}`,{
            method:'PUT'


        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
        })

    }
    
    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)}    className='btn btn-xs btn-primary'>Make Admin</button>}</td>
            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
}

    export default AllUsres;