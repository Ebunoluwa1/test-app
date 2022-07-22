import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
      cursor:pointer;
      font-size: 19px;
    padding: 15px;
    width: 150px;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
 background-color: #1363DF; 
&:hover{
    background-color:white;
    color: #1363DF; 
}
`

const TestButton = ({children , className}) => {
  return (
    <StyledButton className={className}>{children}</StyledButton>
    
  );
}

 export const StyledBtn = styled.div`
    padding: 20px;
    h2{
        margin-bottom: 10px;
    }
`

export default TestButton;