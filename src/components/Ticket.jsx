import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Ticket = ({ ticket }) => {
  const navigate = useNavigate()
  const DeleteExample = async () => {
    const response = await axios.delete(
      `http://localhost:3010/booking/${ticket._id}`
    )
    navigate('/book')
  }

  return (
    <>
      <article className="booking-article">
        <div className="booking-info">
          <h2 className="booking-name">{ticket.name}</h2>
          <p className="booking-date">
            {ticket.date.replace('T00:00:00.000Z', '')}
          </p>
          <p className="booking-type">{ticket.ticketType}</p>
          <p className="booking-type">{ticket.email}</p>
          <button className="delete-T" type="submit" onClick={DeleteExample}>
            Delete
          </button>
        </div>
      </article>
    </>
  )
}

export default Ticket
