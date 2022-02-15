import './App.css';
import bella from './assets/images/bella.jpg';
import trespordos from './assets/images/trespordos.jpg';
import blackfriday from './assets/images/blackfriday.jpg';
import lunescibernetico from './assets/images/lunescibernetico.jpg';
import labial from './assets/images/labial.jpg'
import lenceria from './assets/images/lenceria.jpg'
import rimel from './assets/images/rimel.jpg'
import crema from './assets/images/crema.jpg'
import ropainterior from './assets/images/ropainterior.jpg'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';

function App() {
  return (
    <div className="App">
      <div className='busqueda'>
        <input type="search" placeholder="Buscar"/><BsSearch/>
      </div>

{/*Aqui comienza el encabezado*/}
      <header className="header">
        <div className='headerConteiner'>
          <div className='logo'>
            <img className='logo-Bella' src={bella}/>
            <h1>Bella Donna Oggi</h1>
          </div>
          <nav className='menu'>            
            <ul>
              <li><a href='#'>Incio</a></li>
              <li><a href='#'>Categorías</a></li>
              <li><a href='#'>Promociones/Ofertas</a></li>
              <li><a href='#'>Contacto</a></li>
              <li><a href='#'>Ubicación</a></li>   
            </ul>
          </nav>          
        </div>
        {/*<img className='Logo' src={bella}/>
        <h1>Bella Dona Oggi</h1>   */}    
      </header>

{/*Aqui comienza el Slider*/}
      <div className="container-slider">  
        <ul className="slider">
          <li id="slide1">
          <img src={trespordos}/>
          </li>
          <li id="slide2">
          <img src={blackfriday}/>
          </li>
          <li id="slide3">
          <img src={lunescibernetico}/>
          </li>
        </ul>    
        <ul className="menu-slider">
          <li>
            <a href="#slide1">1</a>
          </li>
          <li>
            <a href="#slide2">2</a>
          </li>
          <li>
            <a href="#slide3">3</a>
          </li>
        </ul>        
      </div>

{/*Aqui comienza el productos especiales*/}
      <div className='pruductos-especiales'>
        <div className='slider-carrusel'>
          <div className='image'>
            <img src={labial}/>
            <div className='button'>
              <a href='#' className='btn'>Ver +</a>
            </div>
          </div>
          <div className='product-details'>
            <div className='product-name'>
              <a href='#'>Labial</a>
              <span>Producto Popular</span>
            </div>
            <a href='#' className='price'>$250</a>
          </div>
        </div>
        <div className='slider-carrusel'>
          <div className='image'>
            <img src={crema}/>
            <div className='button'>
              <a href='#' className='btn'>Ver +</a>
            </div>
          </div>
          <div className='product-details'>
            <div className='product-name'>
              <a href='#'>Crema</a>
              <span>Producto Popular</span>
            </div>
            <a href='#' className='price'>$250</a>
          </div>
        </div>
        <div className='slider-carrusel'>
          <div className='image'>
            <img src={lenceria}/>
            <div className='button'>
              <a href='#' className='btn'>Ver +</a>
            </div>
          </div>
          <div className='product-details'>
            <div className='product-name'>
              <a href='#'>Lenceria</a>
              <span>Producto Popular</span>
            </div>
            <a href='#' className='price'>$250</a>
          </div>
        </div>        
        <div className='slider-carrusel'>
          <div className='image'>
            <img src={rimel}/>
            <div className='button'>
              <a href='#' className='btn'>Ver +</a>
            </div>
          </div>
          <div className='product-details'>
            <div className='product-name'>
              <a href='#'>Rimel</a>
              <span>Producto Popular</span>
            </div>
            <a href='#' className='price'>$250</a>
          </div>
        </div>
        <div className='slider-carrusel'>
          <div className='image'>
            <img src={ropainterior}/>
            <div className='button'>
              <a href='#' className='btn'>Ver +</a>
            </div>
          </div>
          <div className='product-details'>
            <div className='product-name'>
              <a href='#'>Ropa Interior</a>
              <span>Producto Popular</span>
            </div>
            <a href='#' className='price'>$250</a>
          </div>
        </div>
      </div>

{/*Aqui comienza el pie de pagina*/}
      <footer className="pie-pagina">
        <div className="grupo-1">
          <div className="box">
            <h2>SOBRE NOSOTROS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
          </div>
          <div className="box">
            <h2>SIGUENOS</h2>
            <div className='red-social'>
              <a href='#'><FaFacebook /></a>
              <a href='#'><FaInstagramSquare /></a>
              <a href='#'><FaTwitterSquare /></a>
              <a href='#'><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className='grupo-2'>
          <small>&copy; 2022 <b>Bella Donna</b> - Todos los Derechos Reservados.</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
