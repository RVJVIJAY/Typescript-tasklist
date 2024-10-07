import React from 'react'
import { Showdata } from '../Type'
import { FaTrash } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
const ListData= ({setalldata,alldata,handleedit}:Showdata) => {

  const handledelete=(id:number)=>{
    console.log(id)
    setalldata((pre)=>pre.filter((item)=>item.id!==id))
  }

  return (
    <div className='list-container'>
      {
        alldata.map((item)=>(
          <div key={item.id} className='list-data'>
            <div key={item.id}>{item.data}</div>
            <button className="delete"onClick={()=>handledelete(item.id)}><FaTrash /></button>
            <button className='edit' onClick={()=>handleedit(item.id)}><FaRegEdit /></button>
          </div>
        ))
      }
    </div>
  )
}

export default ListData
