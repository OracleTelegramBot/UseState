import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principal from '/src/view/Principal.jsx';
import './index.css';

function App(){
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Principal />} />

      </Routes>
    </Router>
  );
}

export default App;
