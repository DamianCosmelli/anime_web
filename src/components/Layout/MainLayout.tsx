import { ReactNode } from 'react';
import { MenuItem } from './MenuItem';
//import logo from '../../assets/anime-icon.png';
import logo from '../../assets/logo_2-sfdo.png';
import { TrophyIcon, CalendarDaysIcon, MagnifyingGlassIcon, TvIcon } from '@heroicons/react/24/outline'

// Icon from Heroicons
const iconTv = <TvIcon className="w-6 h-6" />
const iconTemporada = <CalendarDaysIcon className="w-6 h-6" />
const iconSearch = <MagnifyingGlassIcon className="w-6 h-6" />
const iconTop = <TrophyIcon className="w-6 h-6" />

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col  bg-gray-950">
      <header className="flex items-center justify-between bg-gradient-to-r from bg-emerald-600 via-emerald-700 to-emerald-950 rounded-full border-8">
        <ul className="flex space-x-4 items-center">
          <li><img src={logo} alt="Logo" className="w-16 h-16 ml-2" /></li>
          <li><MenuItem icon={iconTv} title="Anime en Tv" route="/" /></li>
          <li><MenuItem icon={iconTemporada} title='Anime Temporada' route='/temporada' /></li>
          <li><MenuItem icon={iconSearch} title='Buscar Anime' route='/search' /></li>
          <li><MenuItem icon={iconTop} title='Top Anime' route='/top' /></li>
        </ul>
      </header>
      <div className="mt-1 flex-1 mb-12">
        <main>
          {children}
        </main>
      </div>
      <footer className="bg-gray-900 text-white p-1 text-center w-full">
        <p>Anime-Web© 2025 by Bishops</p>
      </footer>
    </div>
  );
}
