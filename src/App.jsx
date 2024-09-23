import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Home from './pages'
//import Countries from './pages/countries'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                
            </Routes>
        </Router>
    );
}
 
export default App;

//ReactDOM.createRoot(document.getElementById('root')).render(<App />)