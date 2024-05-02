import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/name",
                element: <h1>hola</h1>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App />
 
)
