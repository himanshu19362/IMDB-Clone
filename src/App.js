import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from "react-router-dom";


import Description from './components/Description/Description'


function App() {   
    
    return (
        <Router>
            <>
                <Navbar />            
                <Routes>
                    <Route path='/' element={<Home />} />                  
                    <Route path='/description/:id' element={<Description />} />                      
                </Routes>
                <Footer />
            </>
        </Router>
    )
}

export default App
