import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './views/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
