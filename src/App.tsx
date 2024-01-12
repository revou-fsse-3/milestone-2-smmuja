// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout, PremiumLayout } from './layouts'
import { Login, Subscribe } from './containers/auth'
import { Business, Sports, Tech, Health, Premium} from './containers/News'
import { Home } from './containers'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Entertainment from './containers/News/Entertainment'

const queryClient = new QueryClient ()

function App() {

  const  router = createBrowserRouter ([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/',
          element: <></>,
        },
        {
          path: '/sports',
          element: <Sports />
        },
        {
          path: '/entertainment',
          element: <Entertainment />
        },
        {
          path: '/health',
          element: <Health />
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/subscribe',
          element: <Subscribe />,
        },
        {
          path: '*',
          element: <h1>Page not found</h1>,
        },
      ]
    },
    {
      element: <PremiumLayout />,
      children: [
        {
          path: '/business',
          element: <Business />
        },
        {
          path: '/tech',
          element: <Tech />
        },
        {
          path: '/premium',
          element: <Premium />
        },
      ]
    }
  ])

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </>
  )
}

export default App
