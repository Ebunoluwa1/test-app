import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Button from './components/button/Button';
import { Routes, BrowserRouter, Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Input from './components/Input/Input';
import NotFound  from './components/404/NotFound';
import Dashboard from './components/dashboard/Dashboard';
import { RequireAuth } from './components/auth/RequireAuth';
import { AuthProvider } from './components/auth/useAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <BrowserRouter>
     <AuthProvider>
      <Navbar/>
     
       <Routes>
           <Route exact path='/' element={<App />} />
           <Route  path='/Dashboard' element={<Dashboard />} />
                <Route path='/Input' element={
                    <RequireAuth>
                        <Input />
                    </RequireAuth>}
                 />
                <Route path='/Button' element={ 
                      <RequireAuth>
                         <Button />
                   </RequireAuth>}
                /> 
                
            <Route path='*' element={<NotFound />} /> 
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  
);


