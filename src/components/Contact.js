import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Contact() {
    const form = useRef();
  

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, form.current, {
          publicKey: process.env.REACT_APP_PUBLIC_KEY
        })
        .then(
          () => {
            toast.success('Message sent successfully');
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    const validateForm = (e) => {
      if (e.target.value === '') {
        toast.error('This is a mandatory field');
      }
    }

  return (
    <section id='connect'>
      <h2>Let's Connect</h2>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" placeholder='Enter Full Name' name="user_name" required onBlur={validateForm}/>
      <label>Email</label>
      <input type="email" placeholder='Enter Email' name="user_email" required onBlur={validateForm}/>
      <label>Message</label>
      <textarea name="message" placeholder='Enter your Message ...' required onBlur={validateForm}/>
      <input type="submit" value="Send" />
    </form>
    <ToastContainer />  
    </section>
  );
}
