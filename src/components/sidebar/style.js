import styled from "styled-components";

export const StyledSidebar = styled.div`
   flex-direction:column;
 display: flex;
 flex: 0.25;
 background: rgb(165, 201, 202);
 height: 100vh;
 margin: -12px;
 padding: 18px;
border-right: 1px solid lightgrey;

.sidebar__header{
    margin-top: 30px;
    .link{
            text-decoration: none;
    }
    h3{
        color: #FFFFFFDE;
    padding-bottom: 8px;
    color: #FFFFFFDE;
    
    &:hover{
        border-bottom: 2px solid lightgrey;
    }
}
}

.sidebar__chats{
    h4{  margin-top: 30px; 
         padding-bottom: 8px;
        color: #FFFFFFDE;
        border-bottom: 2px solid lightgrey;
       }
    
    div{
      margin-top: 20px;
        padding-bottom: 8px;
          &:hover{
        border-bottom: 2px solid lightgrey;
    }
        .link{
            text-decoration: none;
            &:hover{
               color: #2C3333;
            }
           h3{

            color: #FFFFFFDE;
           }
        }
    }    



}
`