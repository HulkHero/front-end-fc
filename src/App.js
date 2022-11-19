import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Bottom from './components/bottom';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Bottom></Bottom>
    </>
  );
}

export default App;
