function Contact() {

  return (
    <div className="container py-4">
      <h2 className="h2" id="Contact-Me">
      I&apos;d love to connect! Please send me a message.
      </h2>

      <form
        action="https://formsubmit.co/7d15528960746a592416c31c8be147f6"
        method="POST"
      >
        <input
          type="hidden"
          name="_subject"
          value="Mariah Wear Portfolio Contact Submission"
        ></input>
        <input
          type="hidden"
          name="_url"
          value="https://mariah-wear.netlify.app/"
        ></input>
        <input
          type="hidden"
          name="_next"
          value="https://mariah-wear.netlify.app/thanks/"
        ></input>
        <div className="row gy-2 gx-3 ">
          <div className="col-12 col-md-6 col-lg-4">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="firstName"
              required
              placeholder="First Name"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              required
              placeholder="Last Name"
            />
          </div>
          <div className="form-group col-12  col-lg-4">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="exampleInputEmail1"
              required
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            {/* <small id="emailHelp" className="form-text text-muted">Please enter a valid email.</small> */}
          </div>
        </div>
        {/* <div className="row"> */}
        <div className="form-group col-auto">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            className="form-control"
            name="message"
            id="message"
            required
            placeholder="Message"
          />
        </div>
        <button type="submit" className="btn btn-dark col-12 my-4">
          Submit
        </button>
        {/* </div> */}
      </form>
    </div>
  );
}

export default Contact;
