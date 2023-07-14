import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Subscribe to our Promotional prompts.</h1>
      <span className="mailDesc">Sign up and Don't miss out on incredible deals and exclusive discounts!<br>
      </br>Subscribe now to stay in the loop and never miss a chance to save on your favorite bookings.</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
