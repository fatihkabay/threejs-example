import './App.css'
import Home from './pages/Home';
import MovingCar from './pages/MovingCar'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/moving-car",
    element: <MovingCar />,
  },
]);

function App() {
  return (
   <div>
    <RouterProvider router={router} />
   </div>
  )
}

export default App
