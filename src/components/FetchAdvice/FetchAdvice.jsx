import React, { useEffect, useState } from 'react'
import './FetchAdvice.css';
import axios from 'axios';
import { FaDiceFive } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";

const FetchAdvice = () => {

  const [data, setData] = useState('');

  const apiURL = 'https://api.adviceslip.com/advice';


  const fetchAdvice = async () => {
    try {
      const res = await axios.get(apiURL);
      // console.log(res);
      setData(res.data.slip)
      // console.log(res.data.slip);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, [])


  return (
    <div className='fetch-advice'>
      <div className="fetch-main">
        <div className="id">
          <p>ADVICE #{data.id}</p>
        </div>
        <p>{data.advice}</p>
        <CiPause1 className='icon1'/>
        <div className="icon2">
          <FaDiceFive onClick={fetchAdvice} />
        </div>
      </div>
    </div>
  )
}

export default FetchAdvice