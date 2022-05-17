import React from 'react';
import bella from '../assets/images/bella.jpg';
import { //Librerias para la navegacion entre diferentes paginas
  Link
} from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';

import ryl1 from '../assets/images/ryl1.jpg'
import ryl2 from '../assets/images/ryl2.jpg'
import ryl3 from '../assets/images/ryl3.jpg'
import ryl4 from '../assets/images/ryl4.jpg'
import ryl5 from '../assets/images/ryl5.jpg'
import ryl6 from '../assets/images/ryl6.jpg'
import ryl7 from '../assets/images/ryl7.jpg'
import ryl8 from '../assets/images/ryl8.jpg'
import './Secciones.css';

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
  
  {/*Comienza Cosmeticos*/}
          <div className='titlecosmeticos'>
              <h2>Ropa y Lenceria</h2>
          </div>
  
  {/*Comienza secciones Categorias*/}
        <div className='grupo_cosmeticos'>
            <div className='pruductos-especiales-seciones'>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={ryl1}/>
                  <div className='button-secciones'>
                    <p>
                        <b>Caracteristicas</b><br></br>
                        <i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</i>
                        <br></br><br></br><b>Id:123456</b>
                    </p>
                  </div>
                </div>
                <div className='product-details-secciones'>
                  <div className='product-name'>
                  <h3><b>Calzon tipo pantie</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={ryl2}/>
                  <div className='button-secciones'>
                    <p>
                        <b>Caracteristicas</b><br></br>
                        <i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</i>
                        <br></br><br></br><b>Id:123456</b>
                    </p>
                  </div>
                </div>
                <div className='product-details-secciones'>
                  <div className='product-name'>
                    <h3><b>Calzon tipo Trusa</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={ryl3}/>
                  <div className='button-secciones'>
                    <p>
                        <b>Caracteristicas</b><br></br>
                        <i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</i>
                        <br></br><br></br><b>Id:123456</b>
                    </p>
                  </div>
                </div>
                <div className='product-details-secciones'>
                  <div className='product-name'>
                    <h3><b>Conjunto ropa interior</b></h3>
                  </div>
                </div>
              </div> 
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={ryl4}/>
                  <div className='button-secciones'>
                    <p>
                        <b>Caracteristicas</b><br></br>
                        <i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</i>
                        <br></br><br></br><b>Id:123456</b>
                    </p>
                  </div>
                </div>
                <div className='product-details-secciones'>
                  <div className='product-name'>
                    <h3><b>Conjunto ropa interior</b></h3>
                  </div>
                </div>
              </div>        
            </div>
              {/*segunda seccion Categorias*/}
            <div className='pruductos-especiales-seciones'>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={ryl5}/>
                  <div className='button-secciones'>
                    <p>
                        <b>Caracteristicas</b><br></br>
                        <i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</i>
                        <br></br><br></br><b>Id:123456</b>
                    </p>
                  </div>
                </div>
                <div className='product-details-secciones'>
                  <div className='product-name'>
                    <h3><b>Blusa grecas frontales</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={ryl6}/>
                  <div className='button-secciones'>
                    <p>
                        <b>Caracteristicas</b><br></br>
                        <i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</i>
                        <br></br><br></br><b>Id:123456</b>
                    </p>
                  </div>
                </div>
                <div className='product-details-secciones'>
                  <div className='product-name'>
                    <h3><b>Vestido corto</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={ryl7}/>
                  <div className='button-secciones'>
                    <p>
                        <b>Caracteristicas</b><br></br>
                        <i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</i>
                        <br></br><br></br><b>Id:123456</b>
                    </p>
                  </div>
                </div>
                <div className='product-details-secciones'>
                  <div className='product-name'>
                    <h3><b>Blusa cinturada</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={ryl8}/>
                  <div className='button-secciones'>
                    <p>
                        <b>Caracteristicas</b><br></br>
                        <i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</i>
                        <br></br><br></br><b>Id:123456</b>
                    </p>
                  </div>
                </div>
                <div className='product-details-secciones'>
                  <div className='product-name'>
                    <h3><b>Blusa con blonda</b></h3>
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