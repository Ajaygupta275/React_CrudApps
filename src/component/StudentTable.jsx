import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentTable = () => {
    const [students, setStudents] = useState("")
    //   const students = [
    //     { id: 1, name: "Khanam", place: "Bengaluru", phone: "765756564" },
    //   ];
    const navigate=useNavigate();

    const DisplayDetails=(id)=>{
          navigate("/student/view/" +id);
     }

     const EditDetails=(id)=>{
         navigate("/student/edit/" +id);
     }

     const RemoveDetails=(id)=>{
          if(window.confirm("Are you sure you want to delete ?")){
            fetch("http://localhost:4000/students/"+id,{
                method:"DELETE",
            }) 
            .then((res)=>{
                alert("Removed Data Delete Sucess");
                window.location.reload();
            })
            .catch((err)=>console.log(err.message))
          }
     }

    useEffect(() => {
        fetch('http://localhost:4000/students')
            .then((res) => res.json())
            .then((data) =>
                setStudents(data)).catch((err) =>
                    console.log(err.message)
                )
    }, [])

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md">
                <div className="p-4 border-b border-gray-200 flex justify-between">
                    <h2 className="text-2xl font-semibold text-purple-700">
                        Student Records
                    </h2>
                    <Link to={'/student/create'}> <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                        Add new Student
                    </button></Link>
                </div>

                <table className="w-full text-left table-auto border-collapse">
                    <thead>
                        <tr className="bg-purple-700 text-white">
                            <th className="p-3">ID</th>
                            <th className="p-3">NAME</th>
                            <th className="p-3">PLACE</th>
                            <th className="p-3">PHONE</th>
                            <th className="p-3">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students && students.map((student) => (
                            <tr
                                key={student.id}
                                className="hover:bg-gray-100 border-b text-gray-600"
                            >
                                <td className="p-3">{student.id}</td>
                                <td className="p-3">{student.name}</td>
                                <td className="p-3">{student.place}</td>
                                <td className="p-3">{student.phone}</td>
                                <td className="p-3 flex space-x-2">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" onClick={()=>DisplayDetails(student.id)}>
                                        View
                                    </button>
                                    <button className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700" onClick={()=>EditDetails(student.id)} >
                                        Edit
                                    </button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={()=>{RemoveDetails(student.id)}}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentTable;
