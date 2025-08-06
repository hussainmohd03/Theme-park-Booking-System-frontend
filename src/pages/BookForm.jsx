import { useRef } from 'react'
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      date: dateRef.current.value,
      ticketType: ticketTypeRef.current.value,
      notes: notesRef.current.value
    }
    const res = await axios.post('http://localhost:3010/booking', data)
    nameRef.current.value = ''
    emailRef.current.value = ''
    phoneRef.current.value = 0
    dateRef.current.value = ''
    ticketTypeRef.current.value = ''
    notesRef.current.value = ''
  }

  return (
    <>
      <section className="booking-container">
        <section className="book-form-container">
          <form onSubmit={handleSubmit} className="book-form">
            <h1>Book a Ticket</h1>
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
