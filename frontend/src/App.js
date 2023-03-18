import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import Home from './components/home';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AddEmployee' element={<AddUser />} />
        <Route path='/EditEmployee/:id' element={<AddUser />} />
      </Routes>
    </>
  );
}

export default App;
