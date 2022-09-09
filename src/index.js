import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import ScrollToTop from './hooks/ScrollToTop';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import Work from './pages/Work';
import Archive from './pages/Archive';
import About from './pages/About';
import ThisOrThat from './pages/works/ThisOrThat';
import ModularAI from './pages/works/ModularAI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScrollToTop />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/work' element={<Work />}/>
        <Route path='/archive' element={<Archive />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/this-or-that' element={<ThisOrThat />}/>
        <Route path='/modular-ai' element={<ModularAI />}/>
      </Routes>
    </ThemeProvider>
  </Router>
);
