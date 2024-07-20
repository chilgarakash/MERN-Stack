import React from 'react';
import './App.css'; 
import Layout from './module/Layout';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import UserForm from './module/user/UserForm';
import UserList from './module/user/UserList';
const App = () => {
  return (
    <BrowserRouter>   
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route index element={<UserList />}></Route>
          <Route path='/add' element={<UserForm />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
