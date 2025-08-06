import { useEffect, useState } from 'react'
import Ticket from './Ticket'
import axios from 'axios'

const BookedTickets = () => {
  const [tickets, setTickets] = useState(null)

  useEffect(() => {
    const getBookings = async () => {
      const res = await axios.get('http://localhost:3010/booking')

      setTickets(res.data)
    }

    getBookings()
  }, [])

  return (
    <>
      {' '}
      <section className="booked-tickets">
        <h2>Booked Tickets</h2>

        {tickets && tickets.map((ticket) => <Ticket ticket={ticket} />)}
      </section>
    </>
  )
}

export default BookedTickets
