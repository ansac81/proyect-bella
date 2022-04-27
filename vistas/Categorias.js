import React from 'react';
import bella from '../assets/images/bella.jpg';
import trespordos from '../assets/images/trespordos.jpg';
import blackfriday from '../assets/images/blackfriday.jpg';
import lunescibernetico from '../assets/images/lunescibernetico.jpg';
import { //Librerias para la navegacion entre diferentes paginas
  Link
} from 'react-router-dom';
import labial from '../assets/images/labial.jpg'
import lenceria from '../assets/images/lenceria.jpg'
import rimel from '../assets/images/rimel.jpg'
import crema from '../assets/images/crema.jpg'
import ropainterior from '../assets/images/ropainterior.jpg'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import {GrClose} from 'react-icons/gr';
import '../App.css';

function Home() {
    return (
      <div className="App">
  {/*Busqueda!!!*/}
        <div className='busqueda'>
          <input type="search" placeholder="Buscar"/>&nbsp;<BsSearch/>
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
                <li><Link to="/">Incio</Link></li>
                <li><Link to="/categorias">Categorías</Link></li>
                <li><Link to="/promociones">Promociones/Ofertas</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/ubicacion">Ubicación</Link></li>
              </ul>
            </nav>          
          </div>
          {/*<img className='Logo' src={bella}/>
          <h1>Bella Dona Oggi</h1>   */}    
        </header>
  
  {/*Comienza Categorias*/}
          <p>HOLA Categorias!!!</p>

  {/*Aqui comienza el pie de pagina*/}
        <footer className="pie-pagina">
          <div className="grupo-1">
            <div className="box">
              <h2>SOBRE NOSOTROS</h2>
              <p><span><b>Direccion:</b></span> Calle Morelos # 2.</p>
              <p><span><b>E-mail:</b></span> belladonnashops@gmail.com</p>
              <p><span><b>Tels.:</b></span> (437) 95 4 3817.</p>
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
  
  export default Home;