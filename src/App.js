import { FeedbackProvider } from './context/FeedbackContext.context';
import AboutIcon from './components/AboutIcon.component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header.component";
import FeedbackList from './components/FeedbackList.component'
import FeedbackStats from "./components/FeedbackStats.component";
import FeedbackForm from "./components/FeedbackForm.component";
import About from "./pages/About.page";
 function App() {
   
    return (
     <FeedbackProvider>
     <Router>
        <Header/>
        <div className='container'>
        <Routes>  
            <Route path='/' element={
            <>  
            <FeedbackForm/>
            <FeedbackStats/>
            <FeedbackList/>
            </>  
        }/>
            <Route path='/about' element={<About />}/>
        </Routes> 

        <AboutIcon />
        </div>
    </Router>  
    </FeedbackProvider>     
    )
}

export default App;
