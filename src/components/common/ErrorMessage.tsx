import { useLocation } from 'react-router-dom';
import ImagenNoEncontrado from '../../assets/triste_2-sfdo.png';
interface ErrorMessageProps {
  message: string;
}

function ReloadLink() {
  const location = useLocation();
  return (
    <a className='text-blue-600 underline' href={location.pathname}>Recargar</a>
  ); 
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  console.error(message); // se registra el error en la consola
  return (
    <div className="p-1 max-w-sm mx-auto">
      <p className='text-emerald-600 text-center text-7xl font-japanes'>ごめんね</p>
      <img src={ImagenNoEncontrado} alt="Error_producido"/>
      <h2 className='text-emerald-800 text-center italic' >Disculpa, se produjo un error en la carga de la pagina. Vuelve a {ReloadLink()} la misma.</h2>
    </div>
  );
}