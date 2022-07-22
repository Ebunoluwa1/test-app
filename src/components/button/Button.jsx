import React from 'react';
import  TestButton, { StyledBtn} from './TestButton'
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom'

const ModifiedButton = styled(TestButton)`
 background-color: #18e028;
 &:hover{
    background-color:white;
    color: #18e028; 
}
 `
 

const Button = () => {

  return (
      <StyledBtn>
            <h2 > Buttons</h2>
          
        <><Link to='/'><TestButton>Click me!  </TestButton></Link>
        <> || </> 
        <Link to='/'><ModifiedButton> Click me!</ModifiedButton></Link></>
      </StyledBtn>
  );
}

export default Button