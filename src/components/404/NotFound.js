import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

  export const StyledNotFound = styled.div`
  padding: 10px;
  
  `

 const NotFound = () => {

  return (
    <StyledNotFound>
     <h1> Oops! This is the error page</h1>
     <p>Click on <Link to='/'>main page</Link> </p>
    </StyledNotFound>
  )
}

export default NotFound
