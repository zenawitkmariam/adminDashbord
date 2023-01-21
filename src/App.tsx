import React , {useState} from 'react';
import Header from './app/component/Header';
import SidebarItem from './app/component/SidebarItem';
import {Sidebar} from './app/component/Sidebar';
import Dashbord from './app/component/Dashbord';
import PostEdit from './app/component/PostEdit';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchPost } from './app/component/PostSlice';


function App() {
  
  const dispatch = useDispatch();
   
  const searchFromHeader = (searchText:string)=>{
    dispatch(searchPost(searchText));
  }  

  return (
    <div className=" bg-gray-50  ">
     <Header searchHeader={searchFromHeader} />
       <div className=' flex h-[100%] bg-blue '>
        <SidebarItem />
        <Routes >
            <Route path="/" element={<Dashbord /> } />
            <Route path="/dashbord" element={<Dashbord /> } />
            <Route path="/postEdit/" element={<PostEdit  /> } />
            <Route path="/postEdit/:id" element={<PostEdit  /> } />
        </Routes>
      </div> 
    </div>
  );
}

export default App;
