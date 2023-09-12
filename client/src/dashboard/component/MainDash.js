import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import '../style/dashboard.css';

function MainDash() {
  const [data, setData] = useState('');

  async function fetchData() {
    try {
      const res = await fetch("http://127.0.0.1:8080/warehouseflow");
      const json = await res.json();
      setData(json.result[0]);
    } catch (err) {
      console.log(err)
    }
  }

  async function authen() {
    try{
        const token = localStorage.getItem('token')
        const response = await fetch("http://127.0.0.1:8080/authen",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                // 'Authorization':`Bearer ${localStorage["Token"]}`
                'Authorization':'Bearer '+ token
            },
        })
        const result = await response.json()
        if(result.status==='ok'){

        }else{
            alert('Auth Failed')
            localStorage.removeItem('token')
            window.location = '/'
        }
    }catch(error){
        console.log(error)
    }
  }

  useEffect(() => {
    authen();
    fetchData();
    const intervalId = setInterval(() => {
        fetchData(); // Fetch data every 10 seconds
      }, 10000); // 10000 milliseconds = 10 seconds
      // Clear the interval when the component unmounts
      return () => {
        clearInterval(intervalId);
      };
  }, [])

  return (
    <>
      {/* Content */}
      <main className="bg-gray-200 flex-1">
        {/* Your content goes here */}
        <h1 className='text-5xl'>Dashboard</h1>
        <h2 className='ml-4 font-bold text-4xl '>Realtime Data</h2>
        <div className='flex flex-wrap'>
            <div className='m-4 card-realtime'>
                <h4>Flow</h4>
                <p>{data.Flow} m3/hr</p>
            </div>
            <div className='m-4 card-realtime'>
                <h4>Pressure</h4>
                <p>{data.Pressure} bars</p>
            </div>
            <div className='m-4 card-realtime'>
                <h4>Level</h4>
                <p>{data.Level} m.</p>
            </div>
            <div className='m-4 card-realtime'>
                <h4>Alarm</h4>
                <p>{data.SW1 === '1' ? (
                    <FontAwesomeIcon icon={faBell} className="text-red-500" />
                    ) : (
                    <FontAwesomeIcon icon={faBell} className="text-green-500" />
                )}</p>
            </div>
        </div>
      </main>
    </>
  );
}

export default MainDash;
