
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from './App.jsx'
import About from './components/about_me';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import { ErrorPage } from './components/error_page';
import Resume from './components/resume';
import ThankYou from './components/thankyou';
import Home from './components/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'thanks',
        element: <ThankYou />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
