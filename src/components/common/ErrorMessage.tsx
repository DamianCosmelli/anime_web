import { useLocation } from 'react-router-dom';
import ImagenNoEncontrado from '../../assets/triste_2-sfdo.png';
interface ErrorMessageProps {
  error?: string;
  message?: string;
}

function ReloadLink() {
  const location = useLocation();
  return (
    <a className='text-blue-600 underline' href={location.pathname}>Recargar</a>
  ); 
}

export function ErrorMessage({ error, message }: ErrorMessageProps) {
  console.error(error); // se registra el error en la consola
  return (
    <div className="p-1 max-w-sm mx-auto">
      <img src={ImagenNoEncontrado} alt="Error_producido"/>
      <h2 className='text-emerald-800 text-center italic' >{message ? message : 'Disculpa, se produjo un error en la carga de la pagina.'} 
        Vuelve a {ReloadLink()} la {message ? "pagina": "misma"}.</h2>
    </div>
  );
}