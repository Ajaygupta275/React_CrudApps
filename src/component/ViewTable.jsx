import React,{useEffect, useState} from 'react'
import { Link,useParams } from 'react-router-dom'
const ViewTable = () => {
 const {studentid}=useParams();
  const [studentData,setStudentData]=useState({});
    useEffect(()=>{
         fetch("http://localhost:4000/students/" + studentid)
         .then((res)=>res.json())
         .then((data)=>setStudentData(data))
         .catch((err)=>console.log(err.message))
    },[]);
  return (
    <div class="container mx-auto">
         <h1>Student Details</h1>
         {studentData && 
         <div>
             <p><strong>ID:</strong>{studentData.id}</p>
             <p><strong>Name:</strong>{studentData.name}</p>
             <p><strong>Place:</strong>{studentData.place}</p>
             <p><strong>Phone:</strong>{studentData.phone}</p>
             
         </div>
         }
         <Link  to={"/"}>
         <button
            className="bg-red-600 text-white px-8 py-2  rounded hover:bg-red-700">
           Back
          </button>
         </Link>
    </div>
  )
}

export default ViewTable
