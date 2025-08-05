const RideCard = ({ ride }) => {
  return (
    <div className="ride-card">
      <h3>{ride.name}</h3>
      <p className="ride-desc">{ride.description}</p>
      <div className="img-wrapper">
        <img src={ride.imageUrl} alt={ride.name} className="ride-image" />
      </div>
      <p>Age Limit: {ride.ageLimit}+</p>
    </div>
  )
}

export default RideCard
