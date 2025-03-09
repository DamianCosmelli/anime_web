import { ReactNode } from 'react';
import { MenuItem } from './MenuItem'; 
import logo from '../../assets/anime-icon.png'; 

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col  bg-gray-400">
      <header className="bg-gray-900 p-3 w-full fixed z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold font-serif">Anime-Web</h1>
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </div>
        <div className="flex items-center justify-between bg-amber-600">
          <nav>
            <ul className="flex space-x-4">
              <li><MenuItem title="Anime en Tv" route="/" /></li>
              <li><MenuItem title='Anime Temporada' route='/temporada'/></li>
              <li><MenuItem title='Buscar Anime' route='/search'/></li>
              <li><MenuItem title='Top Anime' route='/top'/></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="mt-1 flex-1 mb-12">
        <main className="p-4">{children}</main>
      </div>
      <footer className="bg-gray-900 text-white p-1 text-center fixed bottom-0 w-full">
        <p>Anime-Web© 2025 by Bishops</p>
      </footer>
    </div>
  );
}
