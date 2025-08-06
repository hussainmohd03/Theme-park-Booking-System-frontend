import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const backendUrl = import.meta.env.VITE_BACKEND_URL

const Ride = () => {
  let { id } = useParams()

  const [ride, setRide] = useState()

  useEffect(() => {
    const getRide = async () => {
      try {
        const res = await axios.get(`${backendUrl}/rides/${id}`)
        setRide(res.data)
        console.log(res.data)
      } catch (err) {
        console.error('Error in Ride frontEnd Ride:', err)
      }
    }
    getRide()
  }, [])

  return (
    <div className="">
      {ride ? (
        <div className="one-ride-in-a-page">
          <h3>{ride.name}</h3>
          <div className="img-wrapper">
            <img src={ride.imageUrl} alt={ride.name} className="ride-image" />
            <p>{ride.description}</p>
          </div>
          <p>Age Limit: {ride.ageLimit}+</p>
        </div>
      ) : (
        <div className="">
          <h1> Wait a second ... </h1>
        </div>
      )}
    </div>
  )
}

export default Ride
