import { ReactNode } from 'react';
import { MenuItem } from './MenuItem'; 
import logo from '../../assets/anime-icon.png'; 


interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex">
        <aside className="bg-gray-900 p-3 w-40 fixed h-full">
          <nav>
            <ul className="space-y-4">
              <li className="text-center">
                <img src={logo} alt="Logo" className="inline-block mb-2 w-2/5" />
              </li>
              <li><MenuItem title="Home" route="/" /></li>
              <li><MenuItem title='Anime en Tv' route='/ontv'/></li>
            </ul>
          </nav>
        </aside>
        <div className="ml-40 flex-1">
         <div className='flex flex-col'>
           <main className="p-4">{children}</main>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white p-1 text-center fixed bottom-0 w-full">
        <p>Anime-Web© 2025 by Bishops</p>
      </footer>
    </div>
  );
}
