
import React, {useState} from 'react';
import styled from 'styled-components';
import TestButton from '../button/TestButton';


export default TestInput => {

    const [value, setValue] =useState(TestInput);

    const handleChange = e => {
        setValue(e.target.value)
    };
    const reset = ()=>{
        setValue('')
    };

  return (
    [value, handleChange, reset]
  )
}

export const StyledInput = styled.div`
 padding: 15px;
 h2{
  padding-bottom: 10px;
 }
 input{
                        padding: 8px;
                       border: 1px solid #616475;
                        outline-width: 0;
                        background-color:transparent;
                        font-size: 16px;
                    }
                    input::placeholder{
                        font-size: 16px;
                        color: #616475;
                    }

                    .input__group{
                      display: flex;
                      margin: 10px;
                        div{
                          background: lightgrey;
                          padding: 15px;
                          border: 10px;
                        }
                    }
                    .btn{
                      margin-top: 20px;
                      display: flex;
                      justify-content: space-between;
                    }
`

export const InputButton = styled(TestButton)`
 margin-left: 10px;
 padding: 8px;
 font-size: 16px;
    width: 200px;
  
`

export const BackButton = styled(InputButton)`
 background-color: #7A86B6;
 &:hover{
    background-color:white;
    color:#7A86B6; 
 }
`