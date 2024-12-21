import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentTable from './component/StudentTable';
import CreateTable from './component/CreateTable';
import ViewTable from './component/ViewTable';
import EditTable from './component/EditTable';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentTable/>}/>
        <Route path='/student/create' element={<CreateTable/>}/>
        <Route path='/student/edit/:studentid' element={<EditTable/>}/>
        <Route path='/student/view/:studentid' element={<ViewTable/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
