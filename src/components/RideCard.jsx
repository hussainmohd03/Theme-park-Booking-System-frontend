import { Link } from 'react-router-dom'

const RideCard = ({ ride }) => {
  return (
    <Link to={`/rides/${ride._id}`}>
      <div className="ride-card">
        <h3 className="ride-name">{ride.name}</h3>
        <div className="img-wrapper">
          <img src={ride.imageUrl} alt={ride.name} className="ride-image" />
        </div>
        <p className="ride-desc">{ride.description}</p>
        <p>Age Limit: {ride.ageLimit}+</p>
      </div>
    </Link>
  )
}

export default RideCard
