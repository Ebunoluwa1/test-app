import React from 'react';
import styled from 'styled-components';
import { Login } from '../auth/Login';
import { useAuth } from '../auth/useAuth';

export const StyledDashboard = styled. div`
 margin-top: 20px;
 padding: 10px;

`
const Dashboard = () => {

const auth = useAuth()

    
  return ( 

    < StyledDashboard>
        <div>
         <strong>
             Type in your name and Click on the login button, It'd give you acess to the Components in the main page .
         </strong> <br />
        </div>
     {!auth.user && (
          <Login />
        )}
    </ StyledDashboard>
    
  )
}

export default Dashboard