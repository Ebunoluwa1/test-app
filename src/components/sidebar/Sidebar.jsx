import React from 'react'
import {StyledSidebar} from './style.js'
;
import Button from '../button/Button.jsx';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <StyledSidebar>
      <div className="sidebar__header">
       <Link className='link' to ='/Dashboard'><h3>Dashboard </h3> </Link>
      </div>
       
       <div className="sidebar__chats">
         <h4> COMPONENTS</h4>
           <div>
           <Link className='link' to='/Button'><h3>Button</h3> </Link> 
           </div>

           <div>
           <Link className='link' to='/Input'> <h3>Input</h3></Link>
           </div>

           <div>
           <Link className='link' to='/NotFound'> <h3>404 page</h3></Link>
           </div>
       </div>
      
    </StyledSidebar>
  );
}

export default Sidebar