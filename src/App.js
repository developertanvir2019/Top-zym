import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Qustion from './components/Qustion/Qustion';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App container">
      <Navbar></Navbar>
      <Cards></Cards>
      <Qustion></Qustion>
      <Footer></Footer>



    </div>
  );
}

export default App;
