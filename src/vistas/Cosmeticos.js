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

import c1_sombra from '../assets/images/c1_sombra.jpg'
import c2_sombra from '../assets/images/c2_sombra.jpg'
import c3_rimel from '../assets/images/c3_rimel.jpg'
import c4_rubor from '../assets/images/c4_rubor.jpg'
import c5_rubor from '../assets/images/c5_rubor.jpg'
import c6_corrector from '../assets/images/c6_corrector.jpg'
import c7_delineador from '../assets/images/c7_delineador.jpg'
import c8_labial from '../assets/images/c8_labial.jpg'
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
              <h2>COSMETICOS</h2>
          </div>
  
  {/*Comienza secciones Categorias*/}
        <div className='grupo_cosmeticos'>
            <div className='pruductos-especiales-seciones'>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={c1_sombra}/>
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
                  <h3><b>Sombras 1</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={c2_sombra}/>
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
                    <h3><b>Sombras 2</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={c3_rimel}/>
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
                    <h3><b>Rimel</b></h3>
                  </div>
                </div>
              </div> 
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={c8_labial}/>
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
                    <h3><b>Labial</b></h3>
                  </div>
                </div>
              </div>        
            </div>
              {/*segunda seccion Categorias*/}
            <div className='pruductos-especiales-seciones'>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={c4_rubor}/>
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
                    <h3><b>Rubor 1</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={c5_rubor}/>
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
                    <h3><b>Rubor 2</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={c6_corrector}/>
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
                    <h3><b>Corrector</b></h3>
                  </div>
                </div>
              </div>
              <div className='slider-carrusel_secciones'>
                <div className='image-secciones'>
                  <img src={c7_delineador}/>
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
                    <h3><b>Delineador</b></h3>
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