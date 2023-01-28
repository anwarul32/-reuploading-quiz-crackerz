import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Show from './components/show/Show';

import Topics from './components/Topics/Topics';
import Main from './layout/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        // {
        //   path: '/show',
        //   loader: (id) => fetch(`https://openapi.programming-hero.com/api/quiz/${id}`),
        //   element: <Show></Show>
        // }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
