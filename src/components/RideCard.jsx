const RideCard = () => {
  return
  ;<>
    <div className="card">
      <h3>{ride.name}</h3>
      <p>{ride.description}</p>
      <div className="img-wrapper">
        <img src={ride.imageUrl} alt={ride.name} />
      </div>
      <p>Age Limit: {ride.ageLimit}+</p>
    </div>
  </>
}

export default RideCard
