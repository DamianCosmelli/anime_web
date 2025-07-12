import { useState, useEffect } from 'react';

export const LoadingSpinner = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Esperar 2 segundos antes de cambiar el estado de visibilidad
    const timer = setTimeout(() => {
      setVisible(false); // Ocultar el componente después de 2 segundos
    }, 2000);

    // Limpiar el timeout si el componente se desmonta antes de los 2 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {visible && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center" style={{ marginTop: '-80px' }}>
            <p className="text-white ">Loading ...</p>
            <div className="w-24 h-24 border-8 border-emerald-500 border-t-transparent rounded-full animate-spin mt-2">
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
