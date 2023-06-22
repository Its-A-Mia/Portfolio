import { useRef, useState } from 'react';
import SendMessageIcon from '../icons/SendMessageIcon';
import './Contact.css';
import ContactInput from './ContactInput';
import ContentTitle from '../design-system/title/ContentTitle';
import CallToAction from '../design-system/button/CallToAction';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const ref = useRef();

  const onSubmit = () => {};

  return (
    <section className="super-section" id="contact">
      <div className="container grid">
        <ContentTitle className={'contact-title'}>Contact Me</ContentTitle>

        <div className="contact-input-container">
          <form action="https://formsubmit.co/miapurdun@gmail.com" method="POST" ref={ref}>
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
            <CallToAction className="contact-input-submit">Send Message</CallToAction>
          </form>
        </div>
      </div>
      <div className="contact-icon-container">
        <SendMessageIcon />
      </div>
    </section>
  );
};

export default Contact;
