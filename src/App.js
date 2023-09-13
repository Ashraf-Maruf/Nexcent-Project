import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { BallTriangle } from 'react-loader-spinner'
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <div className="App flex justify-center items-center min-h-screen">
      <>
        {
          loading ?
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
            :
            <div className=' w-full'>
              <RouterProvider router={router}></RouterProvider>
            </div>
        }
      </>

    </div>
  );
}

export default App;
