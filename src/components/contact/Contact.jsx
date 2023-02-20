import './Contact.css';
import ContactInput from './ContactInput';
import sendMessageIcon from '../../assets/send-message-icon.svg';
import SendMessageIcon from './SendMessageIcon';

const Contact = () => {
  return (
    <section className="container  grid">
      <h2 className="section-title contact-title">Contact Me</h2>

      <div className="contact-input-container">
        <form>
          <ContactInput label={'Name'} type={'text'} />
          <ContactInput label={'Email'} type={'text'} />
          <ContactInput label={'Message'} type={'textarea'} />
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
