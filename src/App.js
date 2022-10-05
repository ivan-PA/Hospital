import HeaderNav from './componentes/HeaderNav.js';
import Ventana1 from "./componentes/VentanaEmerg1";

export default function App() {
  return (
    <div>
      <h1>
        Esto es de Prueba
      </h1>
      <HeaderNav/>
      <img className='w-full h-full fixed left-0 top-28 bg-blue-500' src='../imagenes/QUIROFANO.png' alt='Mapa hospital' />
      <Ventana1 />
      
    </div>
  )
}