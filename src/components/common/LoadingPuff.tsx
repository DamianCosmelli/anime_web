import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";

export function LoadingPuff() {

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
                        <PuffLoader
                            color="#00BC7E" /* oklch(0.696 0.17 162.48) */
                            loading
                            size={150}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}