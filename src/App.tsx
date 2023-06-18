import './App.css'
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />
  },
  {
   
  },
]);

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return <h1>Dang!</h1>;
}

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
