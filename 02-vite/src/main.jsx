import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Ajax from './pages/Ajax'
import Bonjour from './pages/Bonjour'
import Exercices from './pages/Exercices'
import Lifecycle from './pages/Lifecycle'
import AvecRedux from './pages/AvecRedux'
import SansRedux from './pages/SansRedux'
import { store } from './store'
import { Provider } from 'react-redux';

/* @vite-ignore */
const lazy = async (toImport) => {
  const Component = (await toImport()).default
  return { Component }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/exo',
        element: <Exercices />,
        children: [
          {
            path: 'ajax',
            element: <Ajax />
          },
          {
            path: 'state',
            lazy: () => lazy(() => import('./pages/State'))
          },
          {
            path: 'lifecycle',
            element: <Lifecycle />
          }
        ]
      },
      {
        path: '/bonjour/:name',
        element: <Bonjour />
      },
      {
        path: '/sansRedux',
        element: <SansRedux />
      },
      {
        path: '/avecRedux',
        element: <AvecRedux />
      },
      {
        path: '/a-propos',
        element: <div>A propos</div>
      },
      {
        path: '*',
        element: <div>YOOOOOOOOO</div>
      }
    ]
  },
  {
    path: '/test',
    element: <div>Test</div>
  },
  {
    path: '*',
    element: <div>ERROR</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
  </React.StrictMode>
)
