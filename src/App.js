import { StyledApp } from './App.style'
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar'



function App() {

 
  return (
   
      <StyledApp>
        <Sidebar />
        <Main />
    </StyledApp>
    
  );
}

export default App;
