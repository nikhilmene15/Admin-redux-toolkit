import React from "react";
import {  useDispatch } from "react-redux";
// import { deleteUsers } from "../store/slices/UserSlice";
import { deleteUsers } from '../store/actions';

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearUsers =()=>{
   dispatch(deleteUsers());
  }
  return (
    <>
    <button style={{marginTop:"20px"}} className="btn" onClick={()=>clearUsers()}>DeleteAllUser</button>
    </>
    )
  ;
};
