
import { //Librerias para la navegacion entre diferentes paginas
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from 'react-router-dom';

import Categorias from './vistas/Categorias'
import Contacto from './vistas/Contacto'
import Ubicacion from './vistas/Ubicacion'
import Home from './vistas/Home'

function App() {
  return (
    <div className="content">
      <Router>      
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/categorias" element={<Categorias/>} />
          <Route  path="/contacto" element={<Contacto/>} />
          <Route path="/ubicacion" element={<Ubicacion/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
