import { Route, Routes } from 'react-router-dom';
import './App.css';
import Createdata from './components/Createdata';
import Editdata from './components/Editdata';
import Showdata from './components/Showdata';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Createdata />}/>
      <Route path='/read' element={<Showdata />}/>
      <Route path='/edit:/:id' element={<Editdata />}/>
     </Routes>
    </div>
  );
}

export default App;
