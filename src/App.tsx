// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Layout} from './components/Layout/MainLayout';
import {AnimeSearch} from './pages/AnimeSearch';
import {AnimeOnTv} from './pages/AnimeOnTv';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AnimeOnTv />} />
          <Route path="/search" element={<AnimeSearch />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
