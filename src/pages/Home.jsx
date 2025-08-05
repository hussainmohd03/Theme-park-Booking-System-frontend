import { useState, useEffect } from 'react'
import axios from 'axios'
import RideCard from '../components/RideCard'
const backendUrl = import.meta.env.VITE_BACKEND_URL //added

const Home = () => {
  const [rides, setRides] = useState([])

  useEffect(() => {
    const getRides = async () => {
      try {
        const res = await axios.get(`${backendUrl}/rides`) //added
        setRides(res.data)
        // console.log(res.data) this is data
      } catch (err) {
        console.error('Error in getRides :', err)
      }
    }
    getRides()
  }, [])
  {
    /* added */
  }
  return (
    <div className="">
      {rides ? (
        <div className="cards">
          {rides.map((ride, index) => (
            <RideCard key={index} ride={ride} />
          ))}
        </div>
      ) : (
        <div className="">
          <h1> Wait a second ... </h1>
        </div>
      )}
    </div>
  )
}
export default Home
