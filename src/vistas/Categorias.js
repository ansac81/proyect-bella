import React from 'react';
import bella from '../assets/images/bella.jpg';
import { //Librerias para la navegacion entre diferentes paginas
  Link
} from 'react-router-dom';
import cosmeticos from '../assets/images/cosmeticos.jpg'
import cremas from '../assets/images/cremas.jpg'
import perfumeria from '../assets/images/perfumeria.jpg'
import ropa from '../assets/images/ropa.jpg'
import accesorios from '../assets/images/accesorios.jpg'
import electronicos from '../assets/images/electronicos.jpg'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import '../App.css';
import './Categorias.css';

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
          <div className='titlecatego'>
              <h2>CATEGORÍAS</h2>
          </div>
  {/*Comienza secciones Categorias*/}
          <div className='categorias'>
            <div className='pruductos-especiales'>
              <div className='slider-carrusel'>
                <div className='image'>
                  <img src={cosmeticos}/>
                  <div className='button'>
                    <a href='#' className='btn'><Link to="/cosmeticos">Ir a sección</Link></a>
                  </div>
                </div>
                <div className='product-details'>
                  <div className='product-name'>
                  <p><b>Cosmeticos</b></p>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel'>
                <div className='image'>
                  <img src={perfumeria}/>
                  <div className='button'>
                    <a href='#' className='btn'><Link to="/perfumeria">Ir a sección</Link></a>
                  </div>
                </div>
                <div className='product-details'>
                  <div className='product-name'>
                    <p><b>Perfumeria</b></p>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel'>
                <div className='image'>
                  <img src={cremas}/>
                  <div className='button'>
                    <a href='#' className='btn'><Link to="/cremas">Ir a sección</Link></a>
                  </div>
                </div>
                <div className='product-details'>
                  <div className='product-name'>
                    <p><b>Cremas</b></p>
                  </div>
                </div>
              </div>         
            </div>
              {/*segunda seccion Categorias*/}
            <div className='pruductos-especiales'>
              <div className='slider-carrusel'>
                <div className='image'>
                  <img src={ropa}/>
                  <div className='button'>
                    <a href='#' className='btn'><Link to="/ropa">Ir a sección</Link></a>
                  </div>
                </div>
                <div className='product-details'>
                  <div className='product-name'>
                    <p><b>Ropa y Lencería</b></p>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel'>
                <div className='image'>
                  <img src={accesorios}/>
                  <div className='button'>
                    <a href='#' className='btn'><Link to="/accesorios">Ir a sección</Link></a>
                  </div>
                </div>
                <div className='product-details'>
                  <div className='product-name'>
                    <p><b>Accesorios</b></p>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel'>
                <div className='image'>
                  <img src={electronicos}/>
                  <div className='button'>
                    <a href='#' className='btn'><Link to="/electronicos">Ir a sección</Link></a>
                  </div>
                </div>
                <div className='product-details'>
                  <div className='product-name'>
                    <p><b>Electronicos</b></p>
                  </div>
                </div>
              </div>         
            </div>
          </div>

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