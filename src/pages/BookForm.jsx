import { useEffect, useRef } from 'react'
import axios from 'axios'
const BookForm = () => {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const dateRef = useRef(null)
  const ticketTypeRef = useRef(null)
  const notesRef = useRef(null)

  const initialFormValues = {
    name: '',
    email: '',
    phone: 0,
    date: '',
    ticketType: '',
    notes: ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }
  return (
    <>
      <section>
        <section className="book-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" ref={nameRef} />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" ref={emailRef} />
            <label htmlFor="phone">Phone:</label>
            <input type="tel" name="phone" pattern="[0-9]{8}" ref={phoneRef} />
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" ref={dateRef} />
            <label htmlFor="ticketType">Ticket Type:</label>
            <select name="ticketType" ref={ticketTypeRef}>
              <option value="" defaultValue disabled>
                Select Ticket Type
              </option>
              <option value="Single-Day-Pass">Single Day Pass</option>
              <option value="Family-Pass">Family Pass</option>
              <option value="VIP-Galactic">VIP Galactic</option>
            </select>
            <label htmlFor="notes">Notes:</label>
            <textarea type="text" cols="40" rows="10" ref={notesRef} />
            <button type="submit">Book</button>
          </form>
        </section>
      </section>
    </>
  )
}

export default BookForm
