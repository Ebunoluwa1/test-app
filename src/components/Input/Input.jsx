            import React, { useState } from 'react';
            import TestInput, { StyledInput , InputButton, BackButton } from './TestInput';
           import { useNavigate } from 'react-router-dom';

            const Input = () => {

            const [inputValue, setInputValue, reset] = TestInput('');

            const handleInputChange = e =>{
            setInputValue(e.target.value)
            }
             let navigate = useNavigate()

            return (
         <StyledInput>
            <div>
                <h2>Input</h2>
                <h3>{inputValue}</h3>
                <input type='text' onChange={setInputValue} value={ inputValue} />
                <button onClick={reset}>Enter</button>
           
            </div>

            <div className='input__group'>
                <div> 
                <input 
                type='checkbox'
                placeholder='Enter text here...'
                aria-label=' checkbox for text input '
                onChange={setInputValue} 
                />
                </div>
                <input 
                type='text'
                placeholder='Enter text here...'
                onChange={setInputValue} 
                />
            </div>


            <div className='input__group'>
                <div>
                <input 
                type='radio'
                placeholder='Enter text here...'
                aria-label=' radio for text input '
                onChange={setInputValue} 
                />
                </div>
                <input 
                type='text'
                placeholder='Enter text here...'
                onChange={setInputValue} 
                />
            </div>
             <div className='btn'>
            <div onClick={() => {navigate('/Button')}}>   <InputButton> Click me to go to Buttons</InputButton> </div>   <div onClick={() => {navigate('/')}}>   <BackButton> Click me to go to main page</BackButton> </div>
            </div>
        </StyledInput>

            )
            }

            export default Input