import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { About, Services, Contact, Home, Products } from './components'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
      path: '',
      element: <Home />
    },
    {
      path: 'aboutus',
      element: <About />
    },
    {
      path: 'products',
      element: <Products />
    },
    {
      path: 'services',
      element: <Services />
    },
    {
      path: 'contactus',
      element: <Contact />
    }
    ]
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
