// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {Layout} from './components/Layout/MainLayout';
import {AnimeSearch} from './pages/AnimeSearch';
import {AnimeOnTv} from './pages/AnimeOnTv';
import {AnimeSeason} from './pages/AnimeSeason';
import {AnimeTop} from './pages/AnimeTop';


const App: React.FC = () => {
  return (
    <Router basename="/anime_web">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/ontv" replace />} />
          <Route path="/ontv" element={<AnimeOnTv />} />
          <Route path="/temporada" element={<AnimeSeason />} />
          <Route path="/search" element={<AnimeSearch />} />
          <Route path="/top" element={<AnimeTop />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
