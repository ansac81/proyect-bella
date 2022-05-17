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

import cr1 from '../assets/images/cr1.jpg'
import cr2 from '../assets/images/cr2.jpg'
import cr3 from '../assets/images/cr3.jpg'
import cr4 from '../assets/images/cr4.jpg'
import cr5 from '../assets/images/cr5.jpg'
import cr6 from '../assets/images/cr6.jpg'
import cr7 from '../assets/images/cr7.jpg'
import cr8 from '../assets/images/cr8.jpg'
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
              <h2>CREMAS</h2>
          </div>
  
  {/*Comienza secciones Categorias*/}
        <div className='grupo_cosmeticos'>
            <div className='pruductos-especiales-seciones'>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={cr1}/>
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
                  <h3><b>Exfoliante Fresas</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={cr2}/>
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
                    <h3><b>Exfoliante Azucares Suaves</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={cr3}/>
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
                    <h3><b>Exfoliante Cotton Candy</b></h3>
                  </div>
                </div>
              </div> 
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={cr4}/>
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
                    <h3><b>Crema Manos Coco</b></h3>
                  </div>
                </div>
              </div>        
            </div>
              {/*segunda seccion Categorias*/}
            <div className='pruductos-especiales-seciones'>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={cr5}/>
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
                    <h3><b>Crema Manos Miel</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={cr6}/>
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
                    <h3><b>Exfoliante Arcillas Puras</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={cr7}/>
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
                    <h3><b>Suavizante Manos</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={cr8}/>
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
                    <h3><b>Exfolinate Pies</b></h3>
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