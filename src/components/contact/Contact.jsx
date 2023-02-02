import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWatsapp, BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const notify = () => {
    console.log("fn called");
    toast("Your message has submitted Sucessfully");
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_87ei50q",
        "template_zjtcxra",
        form.current,
        "mjCZS09yAEGOK3AzO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contacts">
      {/* <ToastContainer /> */}
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className=".contact_option-icon" />
            <h4>Email</h4>
            <h5>navoditpathak1999@gmail.com</h5>
            <a href="mailto:navoditpathak1999@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <MdOutlineEmail className=".contact_option-icon" />
            <h4>Messenger</h4>
            <h5>pathak_9152</h5>
            <a href="https://m.me/navoditpathak">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className=".contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>9560499838</h5>
            <a href="https://wa.me/9560499838">Send a message</a>
          </article>
        </div>
        {/* ------End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          ></input>
          <input
            type="email"
            name="mail"
            placeholder="Enter your Email"
          ></input>
          <textarea
            placeholder="your message"
            name="message"
            rows="7"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
