import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function CreateTable() {
const [id,setId]=useState("");
const [name,setName]=useState("");
const [place,setPlace]=useState("");
const [phone,setPhone]=useState("");
const [validation,setValidation]=useState(false)
const navigate=useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault();
    const studentData={id,name,place,phone};
    console.log(studentData);
    fetch("http://localhost:4000/students",{
        method:"POST",
        headers :{
            "content-type":"application/json"
        },
        body:JSON.stringify(studentData)
    }) 
    .then((res)=>{
        alert("Student Data Saved Sucess");
        navigate("/")
    })
    .catch((err)=>console.log(err.message))
}
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">
       Add New Student Records
      </h1>

      {/* Add New Student Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Add New Student
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium">ID:</label>
            <input
              className="w-full border p-2 rounded"
              type="text"
              name="id"
              id="id"
              value={id}
              onChange={e=>setId(e.target.value)}
              required
              onMouseDown={()=>setValidation(true)}
            />
             {id.length===0 && validation && <span className="text-red-800">Please Enter Your ID</span>}
          </div>
          <div>
            <label className="block font-medium">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={e=>setName(e.target.value)}
              className="w-full border p-2 rounded"
              required
              onMouseDown={()=>setValidation(true)}
            />
            {name.length===0 && validation && <span className="text-red-800">Please Enter Your Name</span>}
          </div>
          <div>
            <label className="block font-medium">Place:</label>
            <input
              type="text"
              name="place"
              id="place"
              value={place}
              onChange={e=>setPlace(e.target.value)}
              className="w-full border p-2 rounded"
              required
              onMouseDown={()=>setValidation(true)}
            />
             {place.length===0 && validation && <span className="text-red-800">Please Enter Your Place</span>}
          </div>
          <div>
            <label className="block font-medium">Phone:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={phone}
              onChange={e=>setPhone(e.target.value)}
              className="w-full border p-2 rounded"
              required
              onMouseDown={()=>setValidation(true)}
            />
             {phone.length===0 && validation && <span className="text-red-800">Please Enter Your Phone</span>}
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Add Student
          </button>
          
          <Link to={"/"}>
          <button
            className="bg-red-600 text-white px-8 py-2  rounded hover:bg-red-700">
           Back
          </button>
          </Link>
        </form>
      </div>

      {/* Student Table */}
      
    </div>
  );
}

export default CreateTable;