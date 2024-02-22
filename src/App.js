import logo from './logo.svg';
import './App.css';
import { NavBar } from './componets/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Perfil } from './componets/Perfil';
import { Descargar } from './componets/Descargar';
function App() {
  return (
    <div className="App">
         <NavBar />
<Routes>
  <Route path='/' element={<Perfil/>}/>
  <Route path='/descargar' element={<Descargar/>}/>
</Routes>
    </div>
  );
}

export default App;
