import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
import HandInO from './pages/works/HandInO';
import MoneyPlanet from './pages/works/MoneyPlanet';
import RoboticCabinets from './pages/works/Robotic-Cabinets';
import FirstThingsFirst from './pages/works/FirstThingsFirst';
import TapeBot from './pages/works/TapeBot';
import BeOurGuest from './pages/works/BeOurGuest';
import EmotionReflector from './pages/works/EmotionReflector';
import NewsPrinter from './pages/works/NewsPrinter';
import Innerstagram from './pages/works/Innerstagram';
import LightFlow from './pages/works/LightFlow';
import SoundCreator from './pages/works/SoundCreator';
import ArvalTogether from './pages/works/ArvalTogether';
import Dino from './pages/works/Dino';

import Clouds from './pages/archives/Clouds';
import Reflection from './pages/archives/Reflection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScrollToTop />
    <ThemeProvider theme={theme}>
      	<GlobalStyle />
      	<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/work' element={<Work />} />
			<Route path='/archive' element={<Archive />} />
			<Route path='/about' element={<About />} />
			<Route path='/this-or-that' element={<ThisOrThat />} />
			<Route path='/modular-ai' element={<ModularAI />} />
			<Route path='/hand-in-o' element={<HandInO />} />
			<Route path='/money-planet' element={<MoneyPlanet />} />
			<Route path='/robotic-cabinets' element={<RoboticCabinets />} />
			<Route path='/first-things-first' element={<FirstThingsFirst />} />
			<Route path='/tapebot' element={<TapeBot />} />
			<Route path='/be-our-guest' element={<BeOurGuest />} />
			<Route path='/emotion-reflector' element={<EmotionReflector />} />
			<Route path='/news-printer' element={<NewsPrinter />} />
			<Route path='/innerstagram' element={<Innerstagram />} />
			<Route path='/light-flow' element={<LightFlow />} />
			<Route path='/sound-creator' element={<SoundCreator />} />
			<Route path='/arval-together' element={<ArvalTogether />} />
			<Route path='/dino' element={<Dino />} />

			<Route path='/clouds' element={<Clouds />} />
			<Route path='/reflection' element={<Reflection />} />
      	</Routes>
    </ThemeProvider>
  </Router>
);
