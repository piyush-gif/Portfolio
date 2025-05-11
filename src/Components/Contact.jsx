const Contact = () =>{
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message"></textarea>

      <button type="submit">Send Message</button>
    </form>
  )
}

export default Contact;