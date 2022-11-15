import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    }, []);
    

  return (
    <div className="App">
      
      <RouterProvider router={routes}> 

      </RouterProvider>

    </div>
  );
}

export default App;
