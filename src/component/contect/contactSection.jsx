import React from "react";
import "./contect.css";
const ContactSection = () => {
  return (
    <section
      class="contact"
      id="contact"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <h2 class="heading">
        Contact<span>Me</span>
      </h2>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="a0cec677-5b58-4dfd-9428-5b010453488c"
        />
        <div class="input-box">
          <input type="text" name="name" placeholder="Full Name" />
          <input type="text" name="email" placeholder="Email Address" />
        </div>
        <div class="input-box">
          <input type="number" name="mobile" placeholder="Mobile Number" />
          <input type="text" name="subject" placeholder="Email subject" />
        </div>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <input type="submit" value="send Message" class="btnn" />
      </form>
    </section>
  );
};

export default ContactSection;
