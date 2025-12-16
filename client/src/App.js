
import './App.css';
import { Routes,Route} from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import HomePage from './pages/HomePage';
import About from './pages/About';
import PrivacyPolicy from './pages/Privacy&Policy';
import TermAndCondition from './pages/TermAndCondition';


function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login'element={<Login/>}/>
        <Route path='/signup'element={<Signup/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/privacypolicy'element={<PrivacyPolicy/>}/>
        <Route path='/termcondition'element={<TermAndCondition/>}/>

      </Routes>
      
        
      
    
    </>
  );
}

export default App;
