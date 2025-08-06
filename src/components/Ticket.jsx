const Ticket = ({ ticket }) => {
  return (
    <>
      <article>
        <div class="booking-info">
          <h2 class="booking-name">{ticket.name}</h2>
          <p class="booking-date">
            {ticket.date.replace('T00:00:00.000Z', '')}
          </p>
          <p class="booking-type">{ticket.ticketType}</p>
          <p class="booking-type">{ticket.notes}</p>
        </div>
      </article>
    </>
  )
}

export default Ticket
