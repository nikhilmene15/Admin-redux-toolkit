import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from '../store/slices/UserSlice';
function DisplayUsers() {

  const dispatch = useDispatch();


  const data = useSelector((state)=>{
    return state.users
  });
  
  const DeleteUser =(id)=>{
    dispatch(removeUser(id))

  }

  console.log(data);
  return (
    <ul>
    {data.map((newUser,id)=>{

      return <li key={id}>
      {newUser}
      <button onClick={()=>DeleteUser(id)}>
      <MdDeleteForever className='delete-icon '/>
      </button>
      </li>
    })}
    
    </ul>
  )
}

export default DisplayUsers