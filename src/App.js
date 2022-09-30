import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Qustion from './components/Qustion/Qustion';

function App() {

  return (
    <div className="App container">
      <Navbar></Navbar>
      <Cards></Cards>
      <Qustion></Qustion>



    </div>
  );
}

export default App;
