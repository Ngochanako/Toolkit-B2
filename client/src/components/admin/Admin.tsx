import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUserById, getUsers } from '../../store/reducers/UserReducer';
import { User } from '../../interfaces';
export default function Admin() {
    const users:User[]=useSelector((state:any)=>state.user)
    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(getUsers())
    },[])
    const addNewUser=()=>{
      let user:User={
        name:"ngoc",
        id:Math.floor(Math.random()*10000000),
      }
      dispatch(addUser(user))
    }
    const deleteUser=(id:number)=>{
      dispatch(deleteUserById(id))
    }
  return (
    <div>
      <button onClick={addNewUser}>Add</button>
      {users.map(btn=>(
        <p key={btn.id}>{btn.name} <button onClick={()=>deleteUser(btn.id)}>Xóa</button></p>
        
      ))}
    </div>
  )
}
