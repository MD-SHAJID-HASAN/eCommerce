import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import Navbar from './components/Navbar/Navbar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Product from './components/Product/Product';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Shoes from './components/Shoes/Shoes';
import Orders from './components/Orders/Orders';
import { productAndCartLoader } from './loaders/productsAndCartLoader';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/home',
          loader: async () => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productAndCartLoader, 
          element: <Orders></Orders>
        },
        { path: '/inventory', element: <Inventory></Inventory> },
        { path: '/about', element: <About></About> },

        {
          path: '/shoes',

          loader: async () => {
            return fetch('products.json')
          },

          element: <Shoes></Shoes>
        }

      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
