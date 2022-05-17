
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
import Cosmeticos from './vistas/Cosmeticos'
import Perfumeria from './vistas/Perfumeria'
import Cremas from './vistas/Cremas'
import Ropa from './vistas/Ropa'
import Accesorios from './vistas/Accesorios'
import Electronicos from './vistas/Electronicos'

function App() {
  return (
    <div className="content">
      <Router>      
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/categorias" element={<Categorias/>} />
          <Route  path="/contacto" element={<Contacto/>} />
          <Route path="/ubicacion" element={<Ubicacion/>} />
          <Route path="/cosmeticos" element={<Cosmeticos/>} />
          <Route path="/perfumeria" element={<Perfumeria/>} />
          <Route path="/cremas" element={<Cremas/>} />
          <Route path="/ropa" element={<Ropa/>} />
          <Route path="/accesorios" element={<Accesorios/>} />
          <Route path="/electronicos" element={<Electronicos/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
