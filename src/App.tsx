// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Layout} from './components/Layout/MainLayout';
import {Home} from './pages/Home';
import {AnimeOnTv} from './pages/AnimeOnTv';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ontv" element={<AnimeOnTv />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
