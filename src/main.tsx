import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/styles/global.scss';
import App from './App';
import Home from './pages/Home';
import PokeDetail from './pages/PokeDetail';
import PokemonProvider from './context/PokemonContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:pokeid',
    element: <PokeDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <PokemonProvider>
    <RouterProvider router={router} />
  </PokemonProvider>,
);
