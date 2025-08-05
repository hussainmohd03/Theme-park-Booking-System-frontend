const BookForm = () => {
  return (
    <>
      <section className="book-form">
        <form>
          <label htmlFor="">Name:</label>
          <input type="text" />
          <label htmlFor="">Email:</label>
          <input type="email" />
          <label htmlFor="">Phone:</label>
          <input type="phone" />
          <label htmlFor="">Date:</label>
          <input type="date" />
          <label htmlFor="">Ticket Type:</label>
          <select name="" id="">
            <option value="Single-Day-Pass">Single Day Pass</option>
            <option value="Family-Pass">Family Pass</option>
            <option value="VIP-Galactic">VIP Galactic</option>
          </select>
          <label htmlFor="">Name:</label>
          <input type="text" />
        </form>
      </section>
    </>
  )
}

export default BookForm
