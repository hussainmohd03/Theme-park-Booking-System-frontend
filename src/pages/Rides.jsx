import { useState, useEffect } from 'react'
import axios from 'axios'
import RideCard from '../components/RideCard'

const Rides = () => {
  const [rides, setRides] = useState([])

  useEffect(() => {
    const getRides = async () => {
      try {
        const res = await axios.get('http://localhost:3010/rides')
        setRides(res.data)
      } catch (err) {
        console.error('Error in getRides :', err)
      }
    }
    getRides()
  }, [])
  {
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
export default Rides
