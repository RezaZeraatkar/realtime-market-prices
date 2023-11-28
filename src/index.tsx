import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import reportWebVitals from './reportWebVitals';

import store from './store';
import ErrorPage from 'pages/Error';
import Favorites from 'pages/favorites';
import All from 'pages/All';
import Spot from 'pages/Spot';
import Futures from 'pages/Futures';
import NewListings from 'pages/newListings';
import Rankings from 'pages/Rankings';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'all',
        element: <All />,
      },
      {
        path: 'spot',
        element: <Spot />,
      },
      {
        path: 'futures',
        element: <Futures />,
      },
      {
        path: 'newlistings',
        element: <NewListings />,
      },
      {
        path: 'rankings',
        element: <Rankings />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
