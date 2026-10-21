import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import ManageBooks from './pages/ManageBooks';
import Navigation from './components/Navigation';
import './App.css'


function App() {
  return(
<BrowserRouter>
    <Navigation />
    
  <Routes>
    <Route path="/" element={<Catalog />} />
    <Route path="/manage" element={<ManageBooks />} />
  </Routes>
</BrowserRouter>
  );
}

export default App
