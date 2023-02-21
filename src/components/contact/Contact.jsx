import { useState } from 'react';
import SendMessageIcon from '../icons/SendMessageIcon';
import './Contact.css';
import ContactInput from './ContactInput';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section className="container grid super-section" id="contact">
      <h2 className="section-title contact-title">Contact Me</h2>

      <div className="contact-input-container">
        <form action="https://formsubmit.co/miapurdun@gmail.com" method="POST">
          {/* formsubmit.co api */}
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for reaching out! I will respond to you soon."
          ></input>
          <input type="hidden" name="_template" value="table"></input>
          {/* formsubmit.co api */}
          <ContactInput label={'Name'} type={'text'} name={'name'} value={name} setValue={setName} />
          <ContactInput label={'Email'} type={'email'} name={'email'} value={email} setValue={setEmail} />
          <ContactInput label={'Message'} type={'textarea'} value={message} name={'message'} setValue={setMessage} />
          <button className="contact-input-submit">Send Message</button>
        </form>
      </div>

      <div className="contact-icon-container">
        <SendMessageIcon />
      </div>
    </section>
  );
};

export default Contact;
