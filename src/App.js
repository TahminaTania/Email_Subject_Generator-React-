import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Home from './Design/Home';
import UserInputForm from './Design/UserInputForm';
//import subjects from '../server-api/db.json'

// import api from "./api/subject";


export default function App() {
//   const LOCAL_STORGE_KEY = "subjects";
//   const [subjects, setSubjects]=useState([]);

// const retriveSubject = async()=>{
//   const response =await api.get("/point");
//   return response.data;

// }
// const removeSubHandler=(id)=>{
//   const newSubList = subjects.filter((subjects)=>{
//     return subjects.id !==id;
//   });
//   setSubjects(newSubList);
// }
//  useEffect (()=>{
//    const getAllSubjects= async ()=>{
//      const allSub =await retriveSubject();
//      if(allSub) setSubjects(allSub);
//    }
//    getAllSubjects();
//  },[])


  return (
    <section>
      <div>
        <Home/> 
        
        
    </div>
    
    </section>
  )
}

//9:28

