


import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import App from './App.jsx'
import About from './Pages/About.jsx'
import Contact from './Contact.jsx'
import Dashboard from './Pages/Components/Dashboard.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path : "/",
        element : <Login/>
      }, {
        path : "/Register",
        element : <Register/>
      }, 
      {
        path : "/Home",
        element : <App/>
      }, {
        path:'/About',
        element : <About/>
      }, {
        path : "/Contact",
        element : <Contact/>
      }  ,{
        path : "/Dashboard",
        element : <Dashboard/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>

)


// // ✅ index.js or main.jsx
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Layout from './layout.jsx';
// import Login from './Pages/Login.jsx';
// import Register from './Pages/Register.jsx';
// import App from './App.jsx';
// import About from './Pages/About.jsx';
// import Contact from './Contact.jsx';
// import Dashboard from './Pages/Components/Dashboard.jsx';
// import BlogProvider from './Context/BlogContext'; // ✅ context import karo

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '/', element: <Login /> },
//       { path: '/Register', element: <Register /> },
//       { path: '/Home', element: <App /> },
//       { path: '/About', element: <About /> },
//       { path: '/Contact', element: <Contact /> },
//       { path: '/Dashboard', element: <Dashboard /> }
//     ]
//   }
// ]);

// createRoot(document.getElementById('root')).render(
//   <BlogProvider> {/* ✅ context wrap here */}
//     <RouterProvider router={router} />
//   </BlogProvider>
// );
