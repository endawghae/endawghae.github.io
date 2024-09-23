import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import countries from './pages/countries'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/countries" element={<Countries />} />
            </Routes>
        </Router>
    );
}
 
export default App;

//ReactDOM.createRoot(document.getElementById('root')).render(<App />)