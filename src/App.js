import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        
       <Header />
        <Routes>
          <Route path ="" element={<Home/>}/>
          {/*<Route path ="counter/" element={<Counter />} /> */}
          
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
